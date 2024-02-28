import { useState } from "react";
import Carro from "../Carro/Carro";
import { Botao, Estacionamento, GaragemContainer } from "./styles";

export default function Garagem({ nome, alterarNome }) {
  const [automovel, setAutomovel] = useState({
    modelo: "HR-V",
    cor: "Prata",
    ano: 2024,
    flex: true,
    adicionadoPor: "Juliano",
  });

  return (
    <GaragemContainer>
      <h1>Garagem {nome}</h1>
      <Botao onClick={() => alterarNome()}>Muda nome</Botao>

      <Estacionamento>
        <Carro
          modelo={automovel.modelo}
          cor={automovel.cor}
          ano={automovel.ano}
          adicionadoPor={automovel.adicionadoPor}
          flex={automovel.flex}
        />
      </Estacionamento>
    </GaragemContainer>
  );
}
