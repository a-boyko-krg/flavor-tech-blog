import { Link } from 'react-router-dom';
import './register.scss'


export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Реєстрація</span>
      <form className="registerForm">
        <label>Ім'я:</label>
        <input
          className="registerInput"
          type="еуче"
          placeholder="Введіть своє ім'я..."
        />
        <label>Email:</label>
        <input
          className="registerInput"
          type="email"
          placeholder="Введіть свій email..."
        />
        <label>Пароль:</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Введіть свій пароль..."
        />
        <button className="registerButton">Зареєструватися</button>
        <button className="registerLoginButton">
          <Link to="/login" className="link">
            Вхід
          </Link>
        </button>
      </form>
    </div>
  );
}
