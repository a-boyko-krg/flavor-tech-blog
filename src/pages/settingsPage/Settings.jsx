import './settings.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import profilePicture from '../../assets/loginImg.jpg'

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">
            Редагувати обліковий запис
          </span>
          <span className="settingsDeleteTitle">Видалити обліковий запис</span>
        </div>
        <form className="settingsForm">
          <label>Зображення профілю</label>
          <div className="settingsPP">
            <img src={profilePicture} alt="" />
            <label htmlFor="fileInput">
              <i class="settingsPPIcon fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: 'none' }} />
          </div>
          <label>Ім'я:</label>
          <input type="text" placeholder="Ваше ім'я" />
          <label>Email:</label>
          <input type="email" placeholder="post@gmail.com" />
          <label>Пароль:</label>
          <input type="password" placeholder="Введіть пароль" />
          <button className="settingsSubmit">Оновити</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}