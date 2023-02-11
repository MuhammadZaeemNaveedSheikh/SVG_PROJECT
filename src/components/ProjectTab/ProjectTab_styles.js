import styled from 'styled-components';

const Wrapper = styled.article`
  position: absolute;
  max-width: 700px;
  width: 80vw;
  overflow: hidden;
  background-color: var(--grey-50);
  box-shadow: -0.6rem 0.6rem 0 rgba(29, 30, 28, 0.26);
  border: 2px solid var(--black);
  z-index: 15;

  .project-header {
    position: relative;
    height: 1.8rem;
    display: grid;
    grid-template-columns: 26px 1fr;
    background-color: var(--grey-100);
    border-bottom: 2px solid var(--black);
    cursor: var(--cursor-move);

    .close {
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--black);
      background-color: var(--grey-200);
      border-right: 2px solid var(--black);
      padding: 0;
      font-size: 1.25rem;

      svg {
        pointer-events: none;
      }
    }

    .img {
      width: 100%;
      height: 100%;
      padding: 5px 1.5rem;
    }

    .project-title {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      left: 50%;
      text-align: center;
      white-space: nowrap;
      background-color: var(--grey-100);
      transform: translateX(-50%);
      font-size: 1rem;
      height: 100%;
      padding: 0 1rem;
      letter-spacing: var(--letterSpacing);
    }
  }

  .project-wrapper {
    max-height: min(60vh, 500px);
    overflow: hidden;
    overflow-y: auto;

    .project-content {
      & > * {
        width: auto;
        max-width: 100%;
        max-height: min(60vh, 500px);
        margin: 0 auto;
        padding: 2rem;
      }

      iframe {
        width: 100%;
        height: 100vh;
      }
    }
  }

  @media screen and (max-width: 992px) {
    .project-wrapper .project-content * {
      padding: 1rem;
    }
  }
`;

export default Wrapper;
