import { useState } from "react";
import Button from "../../ui/Button";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className='p-4' onSubmit={handleSubmit}>
      <p>👋 Welcome! Please start by telling us your name:</p>

      <input
        type='text'
        placeholder='Your full name'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='w-72 mt-4  mb-10 px-4 py-2 rounded-full input'
      />

      {username !== "" && (
        <div>
          <Button type={"primary"} to='/menu'>
            Start ordering
          </Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
