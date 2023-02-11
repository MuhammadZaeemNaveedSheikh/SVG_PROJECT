import { ReactSVG } from 'react-svg';
import Wrapper from './SVGs_styles';
import { useAppContext } from '../../context/appContext';
import advertisingBoard from '../../assets/svg/advertisingboard.svg';

const AdvertisingBoard = ({ className }) => {
  const { handleSvgMouseenter, handleSvgMouseleave, openProject } =
    useAppContext();

  const handleBoardClick = e => {
    openProject(e.target.id);
  };

  return (
    <Wrapper className={className}>
      <ReactSVG className="object" src={advertisingBoard} />

      <div
        id="board"
        className="svg-overlay"
        onMouseEnter={handleSvgMouseenter}
        onMouseLeave={handleSvgMouseleave}
        onClick={handleBoardClick}
      ></div>
    </Wrapper>
  );
};

export default AdvertisingBoard;
