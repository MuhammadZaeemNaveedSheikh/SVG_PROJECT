import { ReactSVG } from 'react-svg';
import Wrapper from './SVGs_styles';
import { useAppContext } from '../../context/appContext';
import cars from '../../assets/svg/cars.svg';

const Cars = ({ className }) => {
  const { handleSvgMouseenter, handleSvgMouseleave, playSound, openProject } =
    useAppContext();

  const handleTreeClick = (e) => {
    openProject(e.target.id);
  };
  const handleLuxuryCarClick = (e) => {
    openProject(e.target.id);
  };
  const handleSportCarClick = (e) => {
    playSound(e.target.id);
    openProject(e.target.id);
  };
  const handleOffroadCarClick = (e) => {
    playSound(e.target.id);
    openProject(e.target.id);
  };

  return (
    <Wrapper className={className}>
      <ReactSVG className="object" src={cars} />

      <div
        id="tree"
        className="svg-overlay"
        onMouseEnter={handleSvgMouseenter}
        onMouseLeave={handleSvgMouseleave}
        onClick={handleTreeClick}
      ></div>
      <div
        id="offroadCar"
        className="svg-overlay"
        onMouseEnter={handleSvgMouseenter}
        onMouseLeave={handleSvgMouseleave}
        onClick={handleOffroadCarClick}
      ></div>
      <div
        id="luxuryCar"
        className="svg-overlay"
        onMouseEnter={handleSvgMouseenter}
        onMouseLeave={handleSvgMouseleave}
        onClick={handleLuxuryCarClick}
      ></div>
      <div
        id="sportCar"
        className="svg-overlay"
        onMouseEnter={handleSvgMouseenter}
        onMouseLeave={handleSvgMouseleave}
        onClick={handleSportCarClick}
      ></div>
    </Wrapper>
  );
};

export default Cars;
