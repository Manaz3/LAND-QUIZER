import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function LoginPage(): JSX.Element {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault()
    const res = await fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ name, password }),
    });
    const response = await res.json();
    console.log(response);
    
    dispatch({ type: 'user/login', payload: response });
    navigate('/');
  }

  return (
    <div className="container">
      <div className="row">
        <form className="col s12" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input type="text" className="validate"  onChange={(event) => setName(event.target.value)} placeholder="Name" />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                type="password"
                className="validate"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="waves-effect waves-light btn">
            Авторизоваться
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
