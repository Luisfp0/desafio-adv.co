import { Header } from "./components/Header";
import HeroCategoryMenu from "./components/HeroCategoryMenu";
import CategoriesScreen from "./pages/CategoriesScreen";

function App() {
  return (
    <section className="w-screen h-auto overflow-hidden pr-[10px]">
      <Header />
      <HeroCategoryMenu />
      <CategoriesScreen />
    </section>
  );
}

export default App;
