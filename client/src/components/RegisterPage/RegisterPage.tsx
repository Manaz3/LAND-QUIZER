import React from 'react';

function RegisterPage(): JSX.Element {
  return (
    <div className='container'>
      <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <input type="text" className="validate" placeholder='Name'/>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input type="password" className="validate" placeholder='Password'/>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input type="password" className="validate" placeholder='Password repeat'/>
        </div>
      </div>
    </form>
  </div>
    </div>
  );
}

export default RegisterPage;