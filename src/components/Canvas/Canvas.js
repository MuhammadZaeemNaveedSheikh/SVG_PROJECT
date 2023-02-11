import { useContext, useRef, useState } from 'react';
import { Layer, Stage, Line } from 'react-konva';
import styled from 'styled-components';
import brush from '../../assets/svg/brush.svg';
import brush_full from '../../assets/svg/brush_full.svg';
import save from '../../assets/svg/save.svg';
import trash from '../../assets/svg/trash.svg';
import eraser from '../../assets/svg/eraser.svg';
import html2canvas from 'html2canvas';
import { DrawContext } from '../../App';

const StyledStage = styled(Stage)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
`;

const StyledPainting = styled(Stage)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const Tools = styled.div`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  position: absolute;
  bottom: 15px;
  right: 15px;
  z-index: 10;
`;

const Tool = styled.img`
  display: block;
  width: ${window.innerWidth > 600 ? '56' : '30'}px;
  height: ${window.innerWidth > 600 ? '56' : '30'}px;
  margin-left: 20px;
  cursor: pointer;
`;

const SetColor = styled.input`
  margin-left: 15px;
  width: ${window.innerWidth > 600 ? '56' : '30'}px;
  height: ${window.innerWidth > 600 ? '56' : '30'}px;
`;

const Canvas = () => {
  const [tool, setTool] = useState('pen');
  const [show, setShow] = useState(true);
  const [brushWidth, setBrushWidth] = useState(30);
  const [color, setColor] = useState('#9141AC');
  const [lines, setLines] = useState([]);
  const isDrawing = useRef(false);
  const stageRef = useRef(null);

  const { drawing, setDrawing } = useContext(DrawContext);

  const saveCanvas = () => {
    setShow(false);
    setTimeout(() => {
      html2canvas(document.body).then(function (canvas) {
        const base64image = canvas.toDataURL('image/png');

        const link = document.createElement('a');
        link.download = 'Download.png';
        link.href = base64image;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setShow(true);
      });
    }, 500);
  };

  const handleClick = (type) => {
    switch (type) {
      case 'brush':
        if (tool === 'eraser') {
          setTool('pen');
          break;
        }
        setDrawing(!drawing);
        break;
      case 'save':
        saveCanvas();
        break;
      case 'trash':
        setLines([]);
        break;
      case 'eraser':
        setTool('eraser');
        break;
      default:
        break;
    }
  };

  const handleRangeChange = (e) => {
    setBrushWidth(parseInt(e.target.value));
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
    setDrawing(true);
  };

  const handleMouseDown = (e) => {
    if (!drawing) {
      return;
    }
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool, color, brushWidth, points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e) => {
    // no drawing - skipping
    if (!isDrawing.current || !drawing) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  return (
    <>
      {drawing && (
        <>
          <Stage></Stage>
          <StyledStage
            width={window.innerWidth}
            height={window.innerHeight}
            onTouchStart={handleMouseDown}
            onTouchMove={handleMouseMove}
            onTouchEnd={handleMouseUp}
            onMouseDown={handleMouseDown}
            onMousemove={handleMouseMove}
            onMouseup={handleMouseUp}
          />
          <StyledPainting
            ref={stageRef}
            width={window.innerWidth}
            height={window.innerHeight}
          >
            <Layer>
              {lines.map((line, i) => (
                <Line
                  key={i}
                  points={line.points}
                  stroke={line.color}
                  strokeWidth={line.brushWidth}
                  tension={0.5}
                  lineCap="round"
                  globalCompositeOperation={
                    line.tool === 'eraser' ? 'destination-out' : 'source-over'
                  }
                />
              ))}
            </Layer>
          </StyledPainting>
        </>
      )}

      {drawing && (
        <Tools show={show}>
          <input
            style={{ width: window.innerWidth > 600 ? 'auto' : 100 }}
            type="range"
            step={1}
            min={1}
            max={50}
            value={brushWidth}
            onChange={handleRangeChange}
          />
          <Tool onClick={() => handleClick('save')} src={save} alt="save" />
          <Tool onClick={() => handleClick('trash')} src={trash} alt="trash" />
          <Tool
            onClick={() => handleClick('eraser')}
            src={eraser}
            alt="eraser"
          />
          <SetColor type="color" value={color} onChange={handleColorChange} />
          <Tool
            onClick={() => handleClick('brush')}
            src={drawing && tool === 'pen' ? brush_full : brush}
            alt="drawing"
          />
        </Tools>
      )}
    </>
  );
};

export default Canvas;
