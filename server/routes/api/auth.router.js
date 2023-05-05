const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

authRouter.post('/register', async (req, res) => {
  try {
    const { name, password, password2 } = req.body;

    if (password !== password2) {
      res.status(403).json({ success: false, message: 'Пароли не совпадают' });
      return;
    }

    const existingUser = await User.findOne({ where: { name } });
    
    if (existingUser) {
      res.status(409).json({
        success: false,
        message: 'Пользователь с таким логином уже существует',
      });
      return;
    }

    const user = await User.create({
      name,
      password: await bcrypt.hash(password, 10),
    });

    req.session.userId = user.id;

    res.status(201).json({ success: true, name: user.name, id: user.id, totalScore: user.total_score });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: 'Непредвиденная ошибка сервера. Попробуйте позже.',
    });
  }
});

authRouter.post('/login', async (req, res) => {
  const { name, password } = req.body;

  const user = await User.findOne({ where: { name } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    res.json({
      success: false,
      message: 'Нет такого пользователя либо пароли не совпадают',
    });
    return;
  }

  req.session.userId = user.id;

  res.json({ success: true, name: user.name, id: user.id, totalScore: user.total_score });
});

authRouter.get('/logout', async (req, res) => {
  try {
    req.session.destroy((error) => {
      if (error) {
        res.status(500).json({ message: 'Ошибка при удалении сессии' });
      }
      res.clearCookie('user_sid').json({ message: 'Успешный выход' });
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = authRouter;