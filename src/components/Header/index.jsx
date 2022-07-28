import { useState } from "react";

const Header = ({ showProducts }) => {
  const [input, setInput] = useState("");

  return (
    <div>
      <img src="" alt="" />
      <div>
        <input onChange={(event) => setInput(event.target.value)} type="text" />
        <button onClick={() => showProducts(input !== "" ? input : null)}>
          teste
        </button>
      </div>
    </div>
  );
};

export default Header;
