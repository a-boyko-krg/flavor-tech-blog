import './singlePost.scss';

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <h1 className="singlePostTitle">
          Бургер класичний
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Автор: <b>Schamaha</b>
          </span>
          <span className="singlePostDate">1 година тому</span>
        </div>
        <p className="singlePostDesc ">
          Класичний бургер - фаворит барбекю на всі часи! За цим надзвичайно
          простим рецептом домашнього бургера з яловичини ви отримаєте смачні
          котлети з цибулею та зеленню для додаткового аромату, які ідеально
          підходять для начинки сиром, салатом та помідорами, а також для
          бутербродів між борошняними булочками.
        </p>
        <div className="singlePostContentUp">
          <img
            className="singlePostImg"
            src="images/recipes/fastfood.jpg"
            alt=""
          />
          <div>
            <div className="singlePostIngredients">
              <h3 className="singlePostDownTitle">Інгредієнти</h3>
              <ul>
                <li>½ ст.л. оливкової олії;</li>
                <li>1 цибулина, очищена та дрібно нарізана;</li>
                <li>
                  1 упаковка фаршу для стейків з яловичини 15% жирності (500 г);
                </li>
                <li>1 ч.л. суміші сушених трав;</li>
                <li>1 яйце, збите;</li>
                <li>4 скибочки зрілого сиру Чеддер (за бажанням);</li>
                <li>4 білі булочки;</li>
                <li>кілька круглих листків салату;</li>
                <li>1 помідор, нарізаний скибочками;</li>
                <li>кетчуп для подачі (за бажанням);</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="singlePostContentDown">
          <div className="singlePostMethod">
            <h3 className="singlePostDownTitle">Спосіб приготування</h3>
            <p>
              Розігріти оливкову олію на сковороді, додати цибулю і готувати 5
              хвилин, поки вона не розм'якне і не почне золотитися. Відставити в
              сторону. У мисці змішати яловичий фарш із зеленню та яйцем.
              Посолити, додати цибулю і добре перемішати. Руками сформуйте 4
              котлети. Смажте бургери на розігрітому мангалі або сковорідці по
              5-6 хвилин з кожного боку. Поки смажиться друга сторона, викласти
              зверху скибочку сиру, щоб він злегка розплавився (якщо
              використовуєте). Тим часом злегка підсмажте надрізані боки булочок
              на грилі. Викладіть салат, бургери та скибочки помідорів. За
              бажанням подавайте з кетчупом.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
