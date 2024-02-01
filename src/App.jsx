import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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

      <div>
        <div className='container'>
          <div className='page'>
            <div className='row'>
              <div className='col-9'>
                <div className='topic'>
                  <div className='d-flex justify-content-between'>
                    <div>
                      <div className='icon'><i class="fa-solid fa-users"></i></div>
                      <div className='title-subtitle d-inline-flex flex-column'>
                        <p className='title'>Набор и поиск команды</p>
                        <p className='subtitle'>Вы ищете партнеров? Создаете сервер? Хотите совместно работать над проектом? В данном разделе вы можете собрать команду.</p>
                      </div>
                    </div>
                    <div className='open'><i class="fa-solid fa-up-right-from-square"></i></div>
                  </div>
                </div>

                <div className='topic'>
                  <div className='d-flex justify-content-between'>
                    <div>
                      <div className='icon'><i class="fa-solid fa-chalkboard-user"></i></div>
                      <div className='title-subtitle d-inline-flex flex-column'>
                        <p className='title'>Руководства и инструкции</p>
                        <p className='subtitle'>Вы ищете партнеров? Создаете сервер? Хотите совместно работать над проектом? В данном разделе вы можете собрать команду.</p>
                      </div>
                    </div>
                    <div className='open'><i class="fa-solid fa-up-right-from-square"></i></div>
                  </div>
                </div>

                <div className='topic'>
                  <div className='d-flex justify-content-between'>
                    <div>
                      <div className='icon'><i class="fa-solid fa-people-robbery"></i></div>
                      <div className='title-subtitle d-inline-flex flex-column'>
                        <p className='title'>Инициативы и предложения</p>
                        <p className='subtitle'>Вы ищете партнеров? Создаете сервер? Хотите совместно работать над проектом? В данном разделе вы можете собрать команду.</p>
                      </div>
                    </div>
                    <div className='open'><i class="fa-solid fa-up-right-from-square"></i></div>
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

export default App
