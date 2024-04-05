import { Header } from "./components/Header";
import HeroCategoryMenu from "./components/HeroCategoryMenu";
import CategoriesScreen from "./pages/CategoriesScreen";

function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <HeroCategoryMenu />
      <CategoriesScreen />
    </div>
  );
}

export default App;
