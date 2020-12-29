import React, {useCallback} from 'react';
import { Fullscreen, useFullscreen } from "react-fullscreen-html";

function App() {
  const screen1 = useFullscreen();
  const screen2 = useFullscreen();

  const reportChange = useCallback((state, handle) => {
    if (handle === screen1) {
      console.log('Screen 1 went to', state, handle);
    }
    if (handle === screen2) {
      console.log('Screen 2 went to', state, handle);
    }
  }, [screen1, screen2]);
  
  return (
    <div>
      <button onClick={screen1.enter}>
        First
      </button>

      <button onClick={screen2.enter}>
        Second
      </button>

      <Fullscreen handle={screen1} onChange={reportChange}>
        <div className="full-screenable-node" style={{background: "red"}}>
          First
          <button onClick={screen1.exit}>
            Exit
          </button>
        </div>
      </Fullscreen>

      <Fullscreen handle={screen2} onChange={reportChange}>
        <div className="full-screenable-node" style={{background: "green"}}>
          Second
          <button onClick={screen2.exit}>
            Exit
          </button>
        </div>
      </Fullscreen>
    </div>
  );
};

export default App;
