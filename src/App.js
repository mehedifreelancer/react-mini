import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './liveTyping';
import FilterHome from './filtering';
import TypingGame from './typingGame';
import GalleryHome from './gallery-shop';

function App() {

    return ( 

        <BrowserRouter>
        <Routes>
          <Route path="/livetyping" element={<Home/>} />
          <Route path="/filtering" element={<FilterHome/>} />
          <Route path="/typingGame" element={<TypingGame/>} />
          <Route path="/gallery-shop" element={<GalleryHome/>} />


        </Routes>
      </BrowserRouter>
     );
}

export default App;