import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './App.css'

function Teams() {
  return (
    <>
      <nav>
        <div className="container">
          <div className='d-flex justify-content-between'>
            <p className='logo'>Mineshare</p>
            <div className='d-flex'>
              <div className='login'>
                <p className='user'>Florida<img src='https://crafatar.com/avatars/853c80ef3c3749fdaa49938b674adae6' /></p>
              </div>
              <div className='exit'><i class="fa-solid fa-door-open"></i></div>
            </div>

          </div>
          <div className='div-link d-flex justify-content-between'>
            <div className='d-inline-flex'>
              <p className='link'><a>Главная</a></p>
              <p className='link'><a>Разделы</a></p>
              <p className='link'><a>Новости</a></p>
            </div>
            <p className='link-end'><a href='https://mineshare.top'>Мониторинг<i class="fa-solid fa-right-from-bracket"></i></a></p>
          </div>
        </div>
      </nav>

      <div className='container'>

      </div>
    </>
  )
}

export default Teams;
