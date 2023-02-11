import { useEffect, useRef } from 'react';
import { useAppContext } from '../../context/appContext';

const AudioPlayer = () => {
  const { musicPlaying, soundPlaying, clearMusic, clearSound, playMusic } =
    useAppContext();

  const musicRef = useRef(null);
  const soundRef = useRef(null);

  function onMusicLoaded() {
    musicRef.current.volume = 0.5;
    musicRef.current.play();
  }

  function onSoundLoaded() {
    soundRef.current.volume = 1;
    soundRef.current.play();
  }

  function onMusicEnded() {
    playMusic();
  }

  useEffect(() => {
    if (!musicPlaying) {
      musicRef.current.pause();
    }
  }, [musicPlaying]);

  useEffect(() => {
    return () => {
      clearMusic();
      clearSound();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <audio
        src={musicPlaying}
        ref={musicRef}
        onLoadedMetadata={onMusicLoaded}
        onEnded={onMusicEnded}
      ></audio>
      <audio
        src={soundPlaying}
        ref={soundRef}
        onLoadedMetadata={onSoundLoaded}
      ></audio>
    </>
  );
};

export default AudioPlayer;
