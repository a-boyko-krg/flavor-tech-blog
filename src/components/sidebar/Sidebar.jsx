import './sidebar.scss';
import { Box, TextField, InputAdornment, IconButton } from '@mui/material';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import aboutImg from '../../assets/aboutMeImg.jpg';
import category1 from '../../assets/category/appetizer.jpg';
import category2 from '../../assets/category/breakfast.jpg';
import category3 from '../../assets/category/lanch.jpg';
import category4 from '../../assets/category/dinner.jpg';
import category5 from '../../assets/category/fastfood.jpg';
import category6 from '../../assets/category/meat.jpg';
import category7 from '../../assets/category/fish.jpg';
import category8 from '../../assets/category/dessert.jpg';
import category9 from '../../assets/category/drinks.jpg';


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ПРО НАС</span>
        <img src={aboutImg} alt="about me" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          facilis consequatur, voluptas nemo iure unde possimus dignissimos
          omnis, natus et sint? Nam numquam magni quisquam rerum accusantium
          quos illo porro.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">КАТЕГОРІЇ</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <img className="sidebarListImg" src={category1} alt="" />
            Закуски
          </li>
          <li className="sidebarListItem">
            <img className="sidebarListImg" src={category2} alt="" />
            Сніданок
          </li>
          <li className="sidebarListItem">
            <img className="sidebarListImg" src={category3} alt="" />
            Обід
          </li>
          <li className="sidebarListItem">
            <img className="sidebarListImg" src={category4} alt="" />
            Вечеря
          </li>
          <li className="sidebarListItem">
            <img className="sidebarListImg" src={category5} alt="" />
            Фастфуд
          </li>
          <li className="sidebarListItem">
            <img className="sidebarListImg" src={category6} alt="" />
            М'ясо
          </li>
          <li className="sidebarListItem">
            <img className="sidebarListImg" src={category7} alt="" />
            Риба
          </li>
          <li className="sidebarListItem">
            <img className="sidebarListImg" src={category8} alt="" />
            Десерти
          </li>
          <li className="sidebarListItem">
            <img className="sidebarListImg" src={category9} alt="" />
            Напої
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">СЛІДКУЙ ЗА НАМИ ТУТ</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-telegram"></i>
          <i className="sidebarIcon fa-brands fa-viber"></i>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
        </div>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">підпишись на наші новини</span>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <TextField
            label="Введіть свій Email тут!"
            id="subscribe"
            sx={{ m: 1, width: '35ch' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <ForwardToInboxIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </div>
    </div>
  );
}
