import './hero.scss';
import Slider from '../slider/Slider';

export default function Hero() {
  return (
    <div className="header">
      <Slider />
      <span className="headerTitleSm">Рецепти для тих, в кого є смак</span>
    </div>
  );
}
