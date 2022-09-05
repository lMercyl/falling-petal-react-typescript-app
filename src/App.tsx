import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout';
import MainPage from './page/MainPage';
import StartPage from './page/StartPage';
import GamePage from './page/GamePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/game" element={<GamePage />} />
      </Route>
    </Routes>
  );
}

export default App;
