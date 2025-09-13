import { Outlet } from "react-router-dom";
import Header from "./Header";

function LayoutApp() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default LayoutApp;
