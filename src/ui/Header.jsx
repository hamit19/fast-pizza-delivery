import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <div className='text-rose-500'>
      <Link to='/'>Home</Link>
      <SearchOrder />
    </div>
  );
}

export default Header;
