import React, { useReducer, useContext } from "react";
import reducer from "./appReducer";
import {
  allMusic,
  allSounds,
  allProjects,
  MAX_WINDOWS_OPEN,
} from "../utils/constants";
import { getRandomArbitrary } from "../utils/utils";
import {
  UPDATE_PROJECTS,
  GENERATE_ASSET_RANDOM_INDEX,
  START_DRAGGING_TAB,
  STOP_DRAGGING_TAB,
  PLAY_MUSIC,
  CLEAR_MUSIC,
  PLAY_SOUND,
  CLEAR_SOUND,
} from "./actions";

const initialState = {
  draw: false,
  color: "#000000",
  openedProjects: [],
  projectAssetRandomIndex: 0,
  draggingTab: {
    elementId: null,
    clientY: 0,
    clientX: 0,
  },
  musicList: allMusic || [],
  lastPlayedMusicIndex: -1,
  musicPlaying: null,
  soundPlaying: null,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSvgMouseenter = (e) => {
    const project = e.target.id;
    const element = document.querySelector(`[data-project=${project}]`);
    const paths = [element, ...element.querySelectorAll("*")];
    paths.forEach((path) =>
      path.style.setProperty("animation-play-state", "running", "important")
    );
  };

  const handleSvgMouseleave = (e) => {
    const project = e.target.id;
    const element = document.querySelector(`[data-project=${project}]`);
    const paths = [element, ...element.querySelectorAll("*")];
    paths.forEach((path) =>
      path.style.setProperty("animation-play-state", "paused", "important")
    );
  };

  const playAllSvgs = () => {
    const elements = [...document.querySelectorAll("[data-project]")];
    elements.forEach((element) => {
      const paths = [element, ...element.querySelectorAll("*")];
      paths.forEach((path) =>
        path.style.setProperty("animation-play-state", "running", "important")
      );
    });
  };

  const openProject = (projectId) => {
    const isProjectOpen = state.openedProjects.includes(projectId);

    // console.log(state.openedProjects);
    let newProjects = [...state.openedProjects, projectId];

    if (isProjectOpen) {
      newProjects = [
        ...state.openedProjects.filter((id) => id !== projectId),
        projectId,
      ];
    }

    if (newProjects.length > MAX_WINDOWS_OPEN) {
      newProjects = newProjects.slice(1);
    }

    // console.log(newProjects);
    dispatch({ type: UPDATE_PROJECTS, payload: { newProjects } });
    return state;
  };

  const closeProject = (projectId) => {
    const newProjects = state.openedProjects.filter((id) => id !== projectId);

    dispatch({ type: UPDATE_PROJECTS, payload: { newProjects } });
  };

  const generateProjectAssetRandomIndex = (projectId) => {
    const arrayLength = allProjects.find((project) => project.id === projectId)
      .assets.length;

    let randomIndex = getRandomArbitrary(0, arrayLength);

    while (randomIndex === state.projectAssetRandomIndex) {
      randomIndex = getRandomArbitrary(0, arrayLength);
    }

    dispatch({ type: GENERATE_ASSET_RANDOM_INDEX, payload: { randomIndex } });
  };

  const startDraggingTab = ({ elementId, clientY, clientX }) => {
    document.body.classList.add("overflow-hidden");
    dispatch({
      type: START_DRAGGING_TAB,
      payload: { elementId, clientY, clientX },
    });
  };

  const stopDraggingTab = () => {
    document.body.classList.remove("overflow-hidden");
    dispatch({ type: STOP_DRAGGING_TAB });
  };

  const playMusic = () => {
    const { musicList, lastPlayedMusicIndex } = state;

    let musicIndex = lastPlayedMusicIndex + 1;

    if (musicIndex >= musicList.length) {
      musicIndex = 0;
    }

    const music = musicList[musicIndex];

    dispatch({
      type: PLAY_MUSIC,
      payload: { music, musicIndex },
    });
  };

  const clearMusic = () => {
    dispatch({ type: CLEAR_MUSIC });
  };

  const playSound = (soundId) => {
    clearSound();

    setTimeout(() => {
      const soundToPlay = allSounds.find((sound) => sound.id === soundId);

      if (soundToPlay) {
        dispatch({
          type: PLAY_SOUND,
          payload: { soundToPlay: soundToPlay.sound },
        });
      }
    }, 1);
  };

  const clearSound = () => {
    dispatch({ type: CLEAR_SOUND });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleSvgMouseenter,
        handleSvgMouseleave,
        playAllSvgs,
        openProject,
        closeProject,
        generateProjectAssetRandomIndex,
        startDraggingTab,
        stopDraggingTab,
        playMusic,
        clearMusic,
        playSound,
        clearSound,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
