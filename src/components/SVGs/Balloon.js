import { ReactSVG } from "react-svg";
import Wrapper from "./SVGs_styles";
import { useAppContext } from "../../context/appContext";
import balloon from "../../assets/svg/balloon.svg";
import { useEffect } from "react";

const Balloon = ({ className }) => {
  const {
    handleSvgMouseenter,
    handleSvgMouseleave,
    openProject,
    openedProjects,
  } = useAppContext();
  const handleBoardClick = async (e) => {
    openProject(e.target.id);
  };

  useEffect(() => {
    if (
      openedProjects.includes("balloon") &&
      !openedProjects.includes("text")
    ) {
      openProject("text");
    }
  }, [openedProjects]);

  return (
    <Wrapper className={className}>
      <ReactSVG className="object" src={balloon} />
      <div
        id="balloon"
        className="svg-overlay"
        onMouseEnter={handleSvgMouseenter}
        onMouseLeave={handleSvgMouseleave}
        onClick={handleBoardClick}
      ></div>
    </Wrapper>
  );
};

export default Balloon;
