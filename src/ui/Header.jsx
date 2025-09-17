import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <div className='bg-yellow-500  p-4 uppercase tracking-widest  '>
      <Link to='/'>Fast React pizza co.</Link>
      <SearchOrder />
    </div>
  );
}

export default Header;
