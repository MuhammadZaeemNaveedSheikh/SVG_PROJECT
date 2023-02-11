import { ReactSVG } from 'react-svg';
import Wrapper from './SVGs_styles';
import { useAppContext } from '../../context/appContext';
import dog from '../../assets/svg/dog.svg';

const Dog = ({ className }) => {
  const {
    musicPlaying,
    handleSvgMouseenter,
    handleSvgMouseleave,
    playAllSvgs,
    playMusic,
    clearMusic,
    openProject,
  } = useAppContext();

  const handleSpeakerClick = () => {
    if (musicPlaying) {
      return clearMusic();
    }
    playAllSvgs();
    playMusic();
  };

  const handleDogClick = (e) => {
    openProject(e.target.id);
  };

  return (
    <Wrapper className={className}>
      <ReactSVG className="object" src={dog} />

      <div
        id="speaker"
        className="svg-overlay"
        onMouseEnter={handleSvgMouseenter}
        onMouseLeave={handleSvgMouseleave}
        onClick={handleSpeakerClick}
      ></div>
      <div
        id="dog"
        className="svg-overlay"
        onMouseEnter={handleSvgMouseenter}
        onMouseLeave={handleSvgMouseleave}
        onClick={handleDogClick}
      ></div>
    </Wrapper>
  );
};

export default Dog;
