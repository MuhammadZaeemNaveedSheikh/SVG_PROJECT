import { useEffect, useRef } from 'react';
import {
  AdvertisingBoard,
  Table,
  Cars,
  Dog,
  ProjectTab,
  Scaffolding,
  Balloon,
} from '../../components';
import Canvas from '../../components/Canvas/Canvas';
import { useAppContext } from '../../context/appContext';
import Wrapper from './Home_styles';

const Home = () => {
  const { openedProjects, draggingTab, stopDraggingTab } = useAppContext();

  const draggingTabPosY = useRef(0);
  const draggingTabPosX = useRef(0);

  const positionOverlays = () => {
    const objects = [...document.querySelectorAll('.object')];
    objects.forEach(object => {
      const { top: parentTop, left: parentLeft } =
        object.getBoundingClientRect();
      const paths = [...object.querySelectorAll('[data-project]')];
      paths.forEach(path => {
        const { top, left, width, height } = path.getBoundingClientRect();
        const svgOverlay = document.getElementById(path.dataset.project);

        svgOverlay.style.top = `${top - parentTop}px`;
        svgOverlay.style.left = `${left - parentLeft}px`;
        svgOverlay.style.width = `${width}px`;
        svgOverlay.style.height = `${height}px`;
      });
    });
  };

  const handleTabDrag = e => {
    const element = document.getElementById(draggingTab.elementId);

    if (element) {
      e.preventDefault();

      const offsetTop = element.offsetTop;
      const offsetLeft = element.offsetLeft;

      const clientY = e.type === 'touchmove' ? e.touches[0].pageY : e.clientY;
      const clientX = e.type === 'touchmove' ? e.touches[0].pageX : e.clientX;

      element.style.top = `${
        offsetTop - (draggingTabPosY.current - clientY)
      }px`;
      element.style.left = `${
        offsetLeft - (draggingTabPosX.current - clientX)
      }px`;
      element.style.bottom = 'auto';
      element.style.right = 'auto';

      draggingTabPosY.current = clientY;
      draggingTabPosX.current = clientX;
    }
  };

  const handleDragStop = e => {
    e.preventDefault();
    stopDraggingTab();
  };

  useEffect(() => {
    if (draggingTab.elementId) {
      draggingTabPosY.current = draggingTab.clientY;
      draggingTabPosX.current = draggingTab.clientX;
      document.addEventListener('mousemove', handleTabDrag);
      document.addEventListener('mouseup', handleDragStop);
      document.addEventListener('touchmove', handleTabDrag);
      document.addEventListener('touchend', handleDragStop);
      document.addEventListener('touchcancel', handleDragStop);
    }

    return () => {
      document.removeEventListener('mousemove', handleTabDrag);
      document.removeEventListener('mouseup', handleDragStop);
      document.removeEventListener('touchmove', handleTabDrag);
      document.removeEventListener('touchend', handleDragStop);
      document.removeEventListener('touchcancel', handleDragStop);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draggingTab]);

  useEffect(() => {
    const interval = setInterval(positionOverlays, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Wrapper>
        <AdvertisingBoard className="element-group advertising-board" />
        <Scaffolding className="element-group scaffolding" />
        <Cars className="element-group cars" />
        <Balloon className="element-group balloon" />
        <Table className="element-group table" />
        <Dog className="element-group dog" />

        {openedProjects.map(projectId => (
          <ProjectTab key={projectId} projectId={projectId} />
        ))}
      </Wrapper>
      <Canvas />
    </>
  );
};

export default Home;
