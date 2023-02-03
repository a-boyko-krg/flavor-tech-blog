import './category.scss'
import category1 from '../../assets/category/appetizer.jpg';
import category2 from '../../assets/category/breakfast.jpg';
import category3 from '../../assets/category/lanch.jpg';
import category4 from '../../assets/category/dinner.jpg';
import category5 from '../../assets/category/fastfood.jpg';
import category6 from '../../assets/category/meat.jpg';
import category7 from '../../assets/category/fish.jpg';
import category8 from '../../assets/category/dessert.jpg';
import category9 from '../../assets/category/drinks.jpg';
import React from 'react';


export default function Category() {
  return (
    <ul className="categoryList">
      <li className="categoryListItem">
        <img className="categoryListImg" src={category1} alt="" />
        Закуски
      </li>
      <li className="categoryListItem">
        <img className="categoryListImg" src={category2} alt="" />
        Сніданок
      </li>
      <li className="categoryListItem">
        <img className="categoryListImg" src={category3} alt="" />
        Обід
      </li>
      <li className="categoryListItem">
        <img className="categoryListImg" src={category4} alt="" />
        Вечеря
      </li>
      <li className="categoryListItem">
        <img className="categoryListImg" src={category5} alt="" />
        Фастфуд
      </li>
      <li className="categoryListItem">
        <img className="categoryListImg" src={category6} alt="" />
        М'ясо
      </li>
      <li className="categoryListItem">
        <img className="categoryListImg" src={category7} alt="" />
        Риба
      </li>
      <li className="categoryListItem">
        <img className="categoryListImg" src={category8} alt="" />
        Десерти
      </li>
      <li className="categoryListItem">
        <img className="categoryListImg" src={category9} alt="" />
        Напої
      </li>
    </ul>
  );
}
