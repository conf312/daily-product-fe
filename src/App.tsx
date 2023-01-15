import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './page/Home';
import { BoxWrap } from './styles/GlobalStyle';

function App() {
  return (
    <BrowserRouter>
      <BoxWrap>
        <Header />
        <div id="cBody">
          <Routes>
            <Route index path="/" element={<Home />} />
          </Routes>
        </div>
      </BoxWrap>
    </BrowserRouter>
  );
}

export default App;
