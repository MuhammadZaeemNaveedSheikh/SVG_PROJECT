import { ReactSVG } from 'react-svg';
import Wrapper from './SVGs_styles';
import { useAppContext } from '../../context/appContext';
import scaffolding from '../../assets/svg/scaffolding.svg';

const Scaffolding = ({ className }) => {
  const { handleSvgMouseenter, handleSvgMouseleave, openProject } =
    useAppContext();

  const handleBoardClick = e => {
    openProject(e.target.id);
  };

  return (
    <Wrapper className={className}>
      <ReactSVG className="object" src={scaffolding} />

      <div
        id="scaffolding"
        className="svg-overlay"
        onMouseEnter={handleSvgMouseenter}
        onMouseLeave={handleSvgMouseleave}
        onClick={handleBoardClick}
      ></div>
    </Wrapper>
  );
};

export default Scaffolding;
