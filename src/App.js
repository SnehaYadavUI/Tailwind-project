// import { renderHook } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SideBarWithContent from "./layout/SideBarWithContent";
import TwoCol from "./layout/TwoCol";
import TailwindDashboardLayout from "./layout/TailwindDashboardLayout";
import MultiSection from "./Pages/MultiSection";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SideBarWithContent />} />
          <Route path="multisection" element={<MultiSection />} />
          <Route path="animation" element={<TwoCol />} />
          <Route path="dashboard" element={<TailwindDashboardLayout />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
