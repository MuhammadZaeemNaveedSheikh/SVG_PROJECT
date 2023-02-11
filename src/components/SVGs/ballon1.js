import { ReactSVG } from 'react-svg';
import Wrapper from './SVGs_styles';
import { useAppContext } from '../../context1/appContext';
import balloon from '../../assets/svg/balloon.svg';

const Balloon = ({ className }) => {
  const { handleSvgMouseenter, handleSvgMouseleave, openProject } =
    useAppContext();

  const handleBoardClick = e => {
    openProject(e.target.id);
  };

  return (
    <Wrapper className={className}>
      <ReactSVG className="object" src={balloon} />

      <div
        id="balloon"
        className="svg-overlay"
        onMouseEnter={handleSvgMouseenter}
        onMouseLeave={handleSvgMouseleave}
        onClick={handleBoardClick}
      ></div>
    </Wrapper>
  );
};

export default Balloon;
