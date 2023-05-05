const router = require("express").Router();
const { Theme, Flash } = require("../../db/models");

router.get("/flashes", async (req, res) => {
  try{
  const themes = await Theme.findAll({ include: Flash })
        console.log(allTheme);
        res.json(allTheme);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
    })

// const test = async () => console.log(await Theme.findAll({ include: Flash }));
// test();

module.exports = router;
