import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import AllowNofication from "./pages/AllowNofication";
import CodeConfirm from "./pages/CodeConfirm";
import PlanLayout from "./pages/Layouts/PlanLayout";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PlanLayout>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/invite" element={<PhoneConfirmation />} />
            <Route path="/code-confirm" element={<CodeConfirm />} />
            <Route path="/allow-notification" element={<AllowNofication />} />
          </Routes>
        </PlanLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
