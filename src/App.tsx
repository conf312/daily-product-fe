import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './page/Home';
import { Join } from './page/Join';
import { Login } from './page/Login';
import { BoxWrap } from './styles/GlobalStyle';

function App() {
  return (
    <BrowserRouter>
      <BoxWrap>
        <Header />
        <div id="cBody">
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route index path="/login" element={<Login />} />
            <Route index path="/join" element={<Join />} />
            <Route index path="/faq" element={<Join />} />
            <Route index path="/like" element={<Join />} />
            <Route index path="/terms" element={<Join />} />
          </Routes>
        </div>
      </BoxWrap>
    </BrowserRouter>
  );
}

export default App;
