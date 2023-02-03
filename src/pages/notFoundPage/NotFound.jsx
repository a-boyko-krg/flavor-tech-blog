import './notfound.scss'
import notfound from '../../assets/not-found.png'
import { Link } from 'react-router-dom';




export default function NotFound() {
  return (
    <>
      <div className="not-found">
        <img className="not-found-img" src={notfound} alt="" />
               <button className="return-btn">
          <Link to="/" className="link">
            НА ГОЛОВНУ{' '}
            <span className='btn-img'>
              <i class="fa-solid fa-rotate-left"></i>
            </span>
          </Link>
        </button>
       
      </div>
    </>
  );
}