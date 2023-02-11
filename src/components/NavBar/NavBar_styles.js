import styled from 'styled-components';

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0.35rem 2rem 0.15rem 2rem;
  background-color: black;
  color: white;
  overflow: visible;

  .menu {
    display: none;
    position: absolute;
    top: 0;
    left: -6px;
    color: black;

    ul {
      margin-top: 28px;
      border: 2px solid black;
      background-color: var(--grey-100);
      min-width: 140px;
    }

    li {
      display: block;
      padding: 0.2rem 1rem;
      width: calc(100% + 2px);

      &:hover {
        background-color: black;
        a {
          color: white;
        }
      }
    }
  }

  .brand {
    font-weight: bold;
    color: white;
  }

  svg {
    display: block;
    margin: auto;
    color: var(--grey-200);
    font-size: 1.5rem;

    &.battery {
      font-size: 1.75rem;
      margin-top: -0.125rem;
    }
  }

  & > ul {
    display: flex;

    &:first-of-type li:not(:first-of-type) {
      cursor: var(--cursor-pointer);
    }

    & > li {
      position: relative;

      &:not(:last-of-type) {
        padding-right: 1rem;
      }

      &.icon-container {
        padding-right: 0.5rem;
      }

      &.time-container {
        padding-left: 0.5rem;
      }

      &:hover .menu {
        display: block;
      }
    }
  }
`;

export default Wrapper;
