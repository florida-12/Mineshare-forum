import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './App.css'
import './Teams.css'

function Teams() {
  return (
    <>
      <nav>
        <div className='container'>
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
        <div className='page'>
          <div className='row'>


            <div className='col-12'>
              <div className='card'>

                <div className='d-flex justify-content-between'>
                  <div className='d-inline-flex flex-column'>
                    <div className='d-inline-flex title' >Название</div>
                    <div className='d-inline-flex'>Описание 1. Здесь может быть более длинное описание.</div>
                  </div>

                  <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Userbox_creeper.svg/1024px-Userbox_creeper.svg.png" class="avatar" />

                    <div className='d-inline-flex flex-column' style={{ verticalAlign: 'bottom' }}>
                      <div className='d-inline-flex username'>Florida</div>
                      <div className='d-inline-flex date'>07-07-2024</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className='col-12'>
              <div className='card'>

                <div className='d-flex justify-content-between'>
                  <div className='d-inline-flex flex-column'>
                    <div className='d-inline-flex title'>Название</div>
                    <div className='d-inline-flex'>Описание 1. Здесь может быть более длинное описание.</div>
                  </div>

                  <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Userbox_creeper.svg/1024px-Userbox_creeper.svg.png" class="avatar" />

                    <div className='d-inline-flex flex-column' style={{ verticalAlign: 'bottom' }}>
                      <div className='d-inline-flex username'>Florida</div>
                      <div className='d-inline-flex date'>07-07-2024</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Teams;
