import { Header } from "./components/Header";
import HeroCategoryMenu from "./components/HeroCategoryMenu";
import CategoriesScreen from "./pages/CategoriesScreen";

function App() {
  return (
    <section className="w-screen h-auto overflow-hidden">
      <Header />
      <HeroCategoryMenu />
      <CategoriesScreen />
    </section>
  );
}

export default App;
