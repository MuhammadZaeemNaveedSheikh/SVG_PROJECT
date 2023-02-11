import { Home } from './pages';
import { AudioPlayer } from './components';
import { createContext, useState } from 'react';

export const DrawContext = createContext({
  drawing: false,
  setDrawing: () => {},
});

const App = () => {
  const [drawing, setDrawing] = useState(false);
  return (
    <DrawContext.Provider value={{ drawing, setDrawing }}>
      <Home />
      <AudioPlayer />
    </DrawContext.Provider>
  );
};

export default App;
