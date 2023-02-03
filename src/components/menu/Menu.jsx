import { Link } from 'react-router-dom';

export default function Menu() {
  const user = false;
  return (
    <ul className="topList">
      <li className="topListItem">
        <Link to="/" className="link">
          ГОЛОВНА
        </Link>
      </li>
      <li className="topListItem">
        <Link to="/favorites" className="link">
          Вибране
        </Link>
      </li>

      <li className="topListItem">
        <Link to="/write" className="link">
          ДОДАТИ
        </Link>
      </li>
      <li className="topListItem">
        <Link to="/contacts" className="link">
          КОНТАКТИ
        </Link>
      </li>
      <li className="topListItem">
        <Link to="/account" className="link">
          {user && 'ВИХІД'}
        </Link>
      </li>
    </ul>
  );
}
