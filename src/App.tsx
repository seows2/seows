import { Route, Routes } from "react-router-dom";
import BackGround from "./Pages/BackGroundPage";
import GamePage from "./Pages/GamePage";
import LayOut from "./Components/LayOut";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<BackGround />} />
        <Route path="game" element={<GamePage />} />
      </Route>
    </Routes>
  );
}

export default App;
