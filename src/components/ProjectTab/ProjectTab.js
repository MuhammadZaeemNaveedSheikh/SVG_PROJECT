import { useLayoutEffect, useRef, useState } from 'react';
import { getRandomItemInArray, getRandomArbitrary } from '../../utils/utils';
import { MdOutlineClose } from 'react-icons/md';
import { allProjects } from '../../utils/constants';
import lines from '../../assets/images/window-top.svg';
import Wrapper from './ProjectTab_styles';
import { useAppContext } from '../../context/appContext';

const ProjectTab = ({ projectId }) => {
  const { closeProject, projectAssetRandomIndex, startDraggingTab } =
    useAppContext();

  const project = allProjects.find(project => project.id === projectId);

  const wrapperRef = useRef(null);

  const [wrapperStyles, setWrapperStyles] = useState({});

  const handleDragStart = e => {
    if (e.target.tagName === 'BUTTON') return;

    e.preventDefault();

    const clientY = e.type === 'touchstart' ? e.touches[0].pageY : e.clientY;
    const clientX = e.type === 'touchstart' ? e.touches[0].pageX : e.clientX;

    startDraggingTab({
      elementId: wrapperRef.current.id,
      clientY,
      clientX,
    });
  };

  useLayoutEffect(() => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    const yPos = getRandomItemInArray(['top', 'bottom']);
    const xPos = getRandomItemInArray(['left', 'right']);

    const yPx = getRandomArbitrary(0, windowHeight / 5);
    const xPx = getRandomArbitrary(0, windowWidth / 5);

    setWrapperStyles({ [yPos]: `${yPx}px`, [xPos]: `${xPx}px` });
  }, []);

  if (project)
    return (
      <Wrapper id={`${projectId}Tab`} style={wrapperStyles} ref={wrapperRef}>
        <div
          className="project-header"
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
        >
          <button
            type="button"
            className="close"
            onClick={() => closeProject(projectId)}
          >
            <MdOutlineClose />
          </button>
          <img className="img" src={lines} alt="Lines" />
          <h2 className="project-title">{project.name}</h2>
        </div>
        <div className="project-wrapper scrollbar">
          <div className="project-content">
            {projectId === 'dice' ? (
              <img
                src={project.assets[projectAssetRandomIndex]}
                className="img"
                alt={`${project.name} project asset ${projectAssetRandomIndex}`}
              />
            ) : (
              project.assets.map((asset, idx) => {
                if (
                  /mp4|mkv|wmv|m4v|mov|avi|flv|webm|flac|mka|m4a|aac|ogg/gi.test(
                    asset
                  )
                ) {
                  return (
                    <video key={idx} className="img" autoPlay muted playsInline>
                      <source src={asset} type="video/mp4" />
                    </video>
                  );
                } else if (asset.endsWith('/')) {
                  return (
                    <iframe
                      title={project.name}
                      key={idx}
                      src={asset}
                      seamless="seamless"
                      scrolling="no"
                      frameBorder="0"
                      allowtransparency="true"
                      allowFullScreen
                    ></iframe>
                  );
                } else {
                  return (
                    <img
                      key={idx}
                      src={asset}
                      className="img"
                      alt={`${project.name} project asset ${idx}`}
                    />
                  );
                }
              })
            )}
          </div>
        </div>
      </Wrapper>
    );

  return <></>;
};

export default ProjectTab;
