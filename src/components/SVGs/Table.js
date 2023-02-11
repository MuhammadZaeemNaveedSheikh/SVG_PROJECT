import { ReactSVG } from 'react-svg';
import Wrapper from './SVGs_styles';
import { useAppContext } from '../../context/appContext';
import table from '../../assets/svg/table.svg';
import { useContext } from 'react';
import { DrawContext } from '../../App';

const Table = ({ className }) => {
  const {
    handleSvgMouseenter,
    handleSvgMouseleave,
    openProject,
    generateProjectAssetRandomIndex,
  } = useAppContext();

  const { setDrawing } = useContext(DrawContext);

  const handleFishClick = e => {
    openProject(e.target.id);
  };
  const handleLampClick = e => {
    openProject(e.target.id);
  };
  const handleDiceClick = e => {
    generateProjectAssetRandomIndex(e.target.id);
    openProject(e.target.id);
  };
  const handleMagazineClick = e => {
    openProject(e.target.id);
  };
  const handleFrameClick = e => {
    openProject(e.target.id);
  };
  const handlePenClick = () => {
    setDrawing(true);
  };

  return (
    <Wrapper className={className}>
      <ReactSVG className="object" src={table} />

      <div
        id="fish"
        className="svg-overlay"
        onMouseEnter={handleSvgMouseenter}
        onMouseLeave={handleSvgMouseleave}
        onClick={handleFishClick}
      ></div>
      <div
        id="lamp"
        className="svg-overlay"
        onMouseEnter={handleSvgMouseenter}
        onMouseLeave={handleSvgMouseleave}
        onClick={handleLampClick}
      ></div>
      <div
        id="dice"
        className="svg-overlay"
        onMouseEnter={handleSvgMouseenter}
        onMouseLeave={handleSvgMouseleave}
        onClick={handleDiceClick}
      ></div>
      <div
        id="magazine"
        className="svg-overlay"
        onMouseEnter={handleSvgMouseenter}
        onMouseLeave={handleSvgMouseleave}
        onClick={handleMagazineClick}
      ></div>
      <div
        id="frame"
        className="svg-overlay"
        onMouseEnter={handleSvgMouseenter}
        onMouseLeave={handleSvgMouseleave}
        onClick={handleFrameClick}
      ></div>
      <div
        id="pen"
        className="svg-overlay"
        onMouseEnter={handleSvgMouseenter}
        onMouseLeave={handleSvgMouseleave}
        onClick={handlePenClick}
      ></div>
    </Wrapper>
  );
};

export default Table;
