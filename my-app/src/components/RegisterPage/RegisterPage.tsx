import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function RegisterPage(): JSX.Element {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const res = await fetch('http://localhost:3001/api/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ name, password, password2 }),
    });
    const response = await res.json();
    
    dispatch({ type: 'user/login', payload: response });
    navigate('/');
  };

  return (
    <div className="container">
      <div className="row">
        <form className="col s12" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                type="text"
                className="validate"
                onChange={(event) => setName(event.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                type="password"
                className="validate"
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                type="password"
                className="validate"
                onChange={(event) => setPassword2(event.target.value)}
                placeholder="Password repeat"
              />
            </div>
          </div>
          <button type="submit" className="waves-effect waves-light btn">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
