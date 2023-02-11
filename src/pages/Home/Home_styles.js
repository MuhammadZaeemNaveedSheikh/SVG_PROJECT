import styled from 'styled-components';

const Wrapper = styled.main`
  position: relative;
  height: 100vh;
  overflow: hidden;

  .element-group {
    position: absolute;
  }

  .advertising-board {
    width: clamp(18.75vmin, 25vmax, 37.5vmin);
    left: 35%;
    transform: translateX(-50%);
    margin: 0 auto;
  }
  .scaffolding {
    width: clamp(18vmin, 18vmax, 25vmin);
    left: 36.3%;
    top: 8%;
  }
  .balloon {
    width: clamp(11vmin, 8vmax, 12vmin);
    top: 22%;
    left: 0.5%;
    transform: translateY(-50%);
  }
  .table {
    width: clamp(24vmin, 40vmax, 96vmin);
    top: 54%;
    left: clamp(-13.68vmin, -5.6vmax, -3.36vmin);
    transform: translateY(-50%);
  }
  .cars {
    width: clamp(23.76vmin, 39.6vmax, 95.04vmin);
    top: 5%;
    right: clamp(-9.504vmin, -3.96vmax, -2.376vmin);
  }
  .dog {
    width: clamp(37.5vmin, 50vmax, 75vmin);
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (max-width: 992px) {
    .scaffolding {
      top: 5%;
    }
    .balloon {
      top: 30%;
    }
    .cars {
      top: 10%;
    }
    .dog {
      left: 60%;
    }
  }

  @media screen and (max-width: 595px) {
    .balloon {
      top: 38%;
    }
    .scaffolding {
      width: clamp(18vmin, 18vmax, 25vmin);
      top: 11.8%;
      left: 28%;
    }
    .advertising-board {
      width: clamp(18.75vmin, 25vmax, 45.5vmin);
      top: 7%;
      left: 23%;
    }
    .cars {
      top: 15%;
    }
    .dog {
      width: clamp(37.5vmin, 50vmax, 95vmin);
      bottom: 7%;
      left: 70%;
    }
  }
`;

export default Wrapper;
