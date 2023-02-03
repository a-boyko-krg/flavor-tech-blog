import './write.scss';

export default function Write() {
  return (
    <div className="write">
      <img className='writeImg' src="images/recipes/fastfood.jpg" alt="" />
      <form className="writeForm">
        <div className="writeFormTitle writeFormGroup">
          <label htmlFor="fileInput">
            <i class="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: 'none' }} />
          <input
            type="text"
            placeholder="Назва"
            className="writeInput writeTitle"
            autoFocus={true}
          />
        </div>
        <div className="writeFormContent writeFormGroup">
          <textarea
            className="writeInput writeText"
            cols="30"
            type="text"
            rows="5"
            placeholder="Опис"
          ></textarea>
          <textarea
            className="writeInput writeText"
            cols="30"
            type="text"
            rows="10"
            placeholder="Інгредієнти"
          ></textarea>
          <textarea
            className="writeInput writeText"
            cols="30"
            type="text"
            rows="15"
            placeholder="Спосіб приготування"
          ></textarea>
        </div>
        <button className="writeSubmit">Опублікувати</button>
      </form>
    </div>
  );
}
