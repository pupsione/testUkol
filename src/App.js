import { Route, Routes } from 'react-router-dom';

import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Main } from "./layout/Main";
import { Character } from "./layout/Character";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/characters/:id' element={<Character />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
