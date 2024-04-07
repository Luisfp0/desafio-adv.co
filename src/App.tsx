import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import CategoriesScreen from "./pages/CategoriesScreen";
import CheckoutScreen from "./pages/CheckoutScreen";

function App() {
  return (
    <Router>
      <div className="overflow-hidden">
        <div className="flex-col">
          <Header />
          <Routes>
            <Route path="/" element={<CategoriesScreen />} />
            <Route path="/checkout" element={<CheckoutScreen />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
