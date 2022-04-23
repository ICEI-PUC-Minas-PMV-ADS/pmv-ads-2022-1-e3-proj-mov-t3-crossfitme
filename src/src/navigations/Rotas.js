import React from "react";
import { useUser } from "../contexts/UserContext";
import Autenticacao from "./Autenticacao";
import Utilizacao from "./Utilizacao";

const Rotas = () => {

  const {signed} = useUser();
    
  return (
    <>
    {
      signed? <Utilizacao />
      : <Autenticacao />
    }
    </>
  )
}

export default Rotas;