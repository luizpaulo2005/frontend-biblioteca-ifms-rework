import { useEffect, useState } from "react";
import { CardIndex } from "./components/card/pesquisa_index";
import { HeaderUser } from "./components/header/user";
import { api } from "./utils/axios";

export function App() {
  const [pesquisas, setPesquisas] = useState([]);

  useEffect(() => {
    api.get("pesquisas/sumario").then((res) => {
      setPesquisas(res.data)
      console.log(pesquisas);
    });
  }, []);
  return (
    <div className="w-screen min-h-screen p-2">
      <HeaderUser />
      <div className="border mt-4 w-full h-auto p-3 flex flex-wrap gap-2 sm:justify-center md:justify-start">
        {pesquisas ?
          pesquisas.map(({ id, titulo }) => {
            return <CardIndex id={id} titulo={titulo} />;
          })
          :
          <div>Sem Pesquisas</div>         
        }
      </div>
    </div>
  );
}
