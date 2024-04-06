import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import HeroCategoryMenu from "./components/HeroCategoryMenu";
import CategoriesScreen from "./pages/CategoriesScreen";

function App() {
  return (
    <Router>
      <div className="overflow-hidden">
        <div className="flex-col">
          <Header />
          <Routes>
            <Route path="/" element={<CategoriesScreen />} />
            <Route path="/checkout" element={<HeroCategoryMenu />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
