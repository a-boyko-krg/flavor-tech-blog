import { Link } from 'react-router-dom';
import './login.scss'


export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Вхід</span>
      <form className="loginForm">
        <label>Email:</label>
        <input
          className="loginInput"
          type="email"
          placeholder="Введіть свій email..."
        />
        <label>Пароль:</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Введіть свій пароль..."
        />
        <button className="loginButton">Увійти</button>
        <button className="loginRegisterButton">
          <Link to="/register" className="link">
            Реєстрація
          </Link>
        </button>
      </form>
    </div>
  );
}

