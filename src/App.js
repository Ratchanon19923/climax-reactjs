import Home from './pages/Home';
import Promotion from './pages/Promotion';
import HeaderNav from './shareComponents/Header';
import HeaderFooter from './shareComponents/Header/headerMb';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/promotion" element={<Promotion />}></Route>
      </Routes>
      <HeaderFooter />
    </>
  );
}

export default App;
