import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query) return;

    navigate(`/order/${query}`);
    setQuery("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search your order'
          className='bg-yellow-100 py-1 px-4 w-52 focus:w-60 rounded-full focus:shadow-lg focus-within:outline-none focus:outline-none transition-all duration-300 ease-in-out '
        />
      </form>
    </div>
  );
}

export default SearchOrder;
