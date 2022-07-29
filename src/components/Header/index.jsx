import { useState } from "react";
import { StyleHeader } from "./style";

const Header = ({ showProducts }) => {
  const [input, setInput] = useState("");

  return (
    <StyleHeader>
      <img src="./assets/logo.svg" alt="" />
      <div className="containerSearchBar">
        <input
          onChange={(event) => setInput(event.target.value)}
          type="text"
          placeholder="Digitar pesquisa"
        />
        <button onClick={() => showProducts(input !== "" ? input : null)}>
          Pesquisar
        </button>
      </div>
    </StyleHeader>
  );
};

export default Header;
