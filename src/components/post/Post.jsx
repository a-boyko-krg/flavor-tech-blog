import './post.scss';
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';


export default function Post() {
const [rating, setRating] = React.useState(0);

  return (
    
      <div className="post">
        <img
          className="postImg"
          src="images/recipes/fastfood.jpg"
          alt="post-img"
        />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Сніданок</span>
            <span className="postCat">Закуски</span>
          </div>
          <span className="postTitle">Бургер класичний</span>
          <hr />
          <span className="postDate">1 година тому</span>
          <p className="postDesc">
            Класичний бургер - фаворит барбекю на всі часи! Цей надзвичайно
            простий рецепт домашнього бургера з яловичини дає змогу приготувати
            смачні котлети з цибулею та зеленню для додаткового аромату, які
            ідеально підходять для начинки з сиром, салатом та помідорами, а
            також для бутербродів з борошняними булочками.
          </p>
        </div>
        <Divider variant="middle" />
        <div className="postFooter">
          <div className="postFooterRating">
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
          </div>
          <div className="postFooterFavorite">
            <Checkbox
              aria-label="add to favorites"
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: 'red' }} />}
            />
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </div>
        </div>
      </div>
    
  );
}
