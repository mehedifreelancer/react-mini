import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './liveTyping';
import FilterHome from './filtering';
import TypingGame from './typingGame';

function App() {

    return ( 

        <BrowserRouter>
        <Routes>
          <Route path="/livetyping" element={<Home/>} />
          <Route path="/filtering" element={<FilterHome/>} />
          <Route path="/typingGame" element={<TypingGame/>} />


        </Routes>
      </BrowserRouter>
     );
}

export default App;