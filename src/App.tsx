// import { useState } from "react";
import { Header } from "./components/Header";
import HeroCategoryMenu from "./components/HeroCategoryMenu";
import CategoriesScreen from "./pages/CategoriesScreen";
// import { SideBar } from "./components/SideBar";

function App() {
  // const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <>
      <div className="overflow-hidden">
        {/* <SideBar openSideBar={openSideBar} /> */}
        <div className="flex-col">
          <Header />
          <HeroCategoryMenu />
          <CategoriesScreen />
        </div>
      </div>
    </>
  );
}

export default App;
