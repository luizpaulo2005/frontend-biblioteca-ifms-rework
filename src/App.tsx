import { useEffect, useState } from "react";
import { CardIndex } from "./components/card/pesquisa_index";
import { HeaderUser } from "./components/header/user";
import { api } from "./utils/axios";

export function App() {
  const [pesquisas, setPesquisas] = useState([]);

  useEffect(() => {
    api.get("pesquisas/sumario").then((res) => {
      setPesquisas(res.data);
      console.log(pesquisas);
    });
  }, []);
  return (
    <div className="w-screen min-h-screen p-2 dark:text-white">
      <HeaderUser />
      <div className="border rounded-md mt-4 w-full h-auto p-3 flex flex-wrap gap-2 sm:justify-center md:justify-start">
        {pesquisas.length > 0 ? (
          pesquisas.map(({ id, titulo }) => {
            return <CardIndex id={id} titulo={titulo} />;
          })
        ) : (
          <div className="w-full text-center">
            <div className="text-2xl">Sem pesquisas</div>
            <div>Atualize a página ou contate o suporte</div>
          </div>
        )}
      </div>
    </div>
  );
}
