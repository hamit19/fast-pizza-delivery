import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverView from "../features/cart/CartOverview";
import Loader from "./Loader";

function LayoutApp() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <div className='layout'>
      {isLoading && <Loader />}

      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverView />
    </div>
  );
}

export default LayoutApp;
