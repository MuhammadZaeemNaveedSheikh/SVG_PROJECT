import {
  UPDATE_PROJECTS,
  GENERATE_ASSET_RANDOM_INDEX,
  START_DRAGGING_TAB,
  STOP_DRAGGING_TAB,
  PLAY_MUSIC,
  CLEAR_MUSIC,
  PLAY_SOUND,
  CLEAR_SOUND,
} from './actions';
import { initialState } from './appContext';

const reducer = (state, action) => {
  if (action.type === UPDATE_PROJECTS) {
    return {
      ...state,
      openedProjects: [...action.payload.newProjects],
    };
  }
  if (action.type === GENERATE_ASSET_RANDOM_INDEX) {
    return {
      ...state,
      projectAssetRandomIndex: action.payload.randomIndex,
    };
  }
  if (action.type === START_DRAGGING_TAB) {
    return {
      ...state,
      draggingTab: {
        elementId: action.payload.elementId,
        clientY: action.payload.clientY,
        clientX: action.payload.clientX,
      },
    };
  }
  if (action.type === STOP_DRAGGING_TAB) {
    return {
      ...state,
      draggingTab: { ...initialState.draggingTab },
    };
  }
  if (action.type === PLAY_MUSIC) {
    return {
      ...state,
      lastPlayedMusicIndex: action.payload.musicIndex,
      musicPlaying: action.payload.music,
    };
  }
  if (action.type === CLEAR_MUSIC) {
    return {
      ...state,
      musicPlaying: initialState.musicPlaying,
    };
  }
  if (action.type === PLAY_SOUND) {
    return {
      ...state,
      soundPlaying: action.payload.soundToPlay,
    };
  }
  if (action.type === CLEAR_SOUND) {
    return {
      ...state,
      soundPlaying: initialState.soundPlaying,
    };
  }
  throw new Error(`No such action: ${action.type}`);
};

export default reducer;
