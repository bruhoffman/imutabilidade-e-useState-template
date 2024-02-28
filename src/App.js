import { useState } from "react";
import Garagem from "./Componentes/Garagem/Garagem";
import { GlobalStyled } from "./GlobalStyled";

export default function App() {
  const [nome, setNome] = useState("Hoffman");

  const alterarNome = () => {
    if (nome === "Hoffman") {
      setNome("Bruno");
    } else {
      setNome("Hoffman");
    }
  };

  return (
    <div className="App">
      <GlobalStyled />

      <Garagem nome={nome} alterarNome={alterarNome} />
    </div>
  );
}
