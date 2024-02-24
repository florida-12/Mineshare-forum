import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './Login.css'
function Login() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-4'></div>
          <div className='col-4'>

            <div className='card-background'>
              <div className='card'>
                <form>
                  <div className='d-flex justify-content-center'>
                    <input placeholder='Email' type='email' required />
                  </div>
                  <div className='d-flex justify-content-center'>
                    <input placeholder='Пароль' type='password' required />
                  </div>
                  <div className='d-flex justify-content-center'>
                    <button className='login-button' type='submit'>Войти</button>
                  </div>
                  <div className='d-flex justify-content-center'>
                    <button className='google'>Войти через Гугл аккаунт
                      <img src='https://freesvg.org/img/1534129544.png' className='google-icon'/>
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
          <div className='col-4'></div>
        </div>

      </div>
    </>
  );
};


export default Login;
