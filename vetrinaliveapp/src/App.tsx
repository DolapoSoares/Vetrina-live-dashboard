import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
// import Error404 from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Home />} />
      {/* <Route path="*" element={<Error404 />} /> */}
    </Routes>
  );
}

export default App;
