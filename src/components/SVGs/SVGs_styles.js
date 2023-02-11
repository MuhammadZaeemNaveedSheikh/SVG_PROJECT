import styled from 'styled-components';

const Wrapper = styled.section`
  pointer-events: none;
  z-index: 8;

  * {
    animation-play-state: paused !important;
  }

  .svg-overlay {
    position: absolute;
    cursor: var(--cursor-pointer);
    border-radius: 30%;
    /* background-color: rgba(255, 0, 0, 0.2); */
    pointer-events: all;
  }

  #speaker {
    border-radius: 30% 10% 0 0;
  }
  #board {
    border-radius: 30% 0 0 0;
  }
  #luxuryCar {
    border-radius: 100% 30% 30% 30%;
  }
`;

export default Wrapper;
