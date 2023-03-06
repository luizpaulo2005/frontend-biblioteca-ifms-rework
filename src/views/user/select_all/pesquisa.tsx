import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { HeaderUser } from "../../../components/header/user";
import { api } from "../../../utils/axios";
import { FileArrowDown } from "phosphor-react";

export function USelectPesquisaAll() {
  const [attributes, setAttributes] = useState([]);

  useEffect(() => {
    api
      .get("/pesquisas/all")
      .then((res) => {
        setAttributes(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="w-screen min-h-screen p-2 dark:text-white">
      <Helmet>
        <title>Lista de Pesquisas</title>
      </Helmet>
      <HeaderUser />
      <div>
        <div className="flex justify-between p-3">
          <div className="text-2xl">Lista de Pesquisas</div>
        </div>
        {attributes.length > 0 ? (
          <table className="w-full">
            <thead className="bg-green-500 text-white dark:bg-green-800">
              <tr>
                <th>Nome</th>
                <th>Discentes</th>
                <th>Docentes</th>
                <th>Data de Apresentação</th>
                <th>PDF</th>
              </tr>
            </thead>
            <tbody>
              {attributes.map(
                ({ id, titulo, discentes, docentes, data_apresentacao }) => {
                  return (
                    <tr key={id} className="text-center border">
                      <td className="border">
                        <a href={`/user/pesquisa/${id}`}>{titulo}</a>
                      </td>
                      {discentes.length > 0 ? (
                        <td className="border"><a href={`/user/discente/${discentes[0].discente.id}`}>{discentes[0].discente.nome}</a></td>
                      ) : (
                        <td className="border">Não cadastrado</td>
                      )}
                      {docentes.length > 0 ? (
                        <td className="border"><a href={`/user/docente/${docentes[0].docente.id}`}>{docentes[0].docente.nome}</a></td>
                      ) : (
                        <td className="border">Não cadastrado</td>
                      )}
                      <td className="border">
                        {dayjs(data_apresentacao).format("DD/MM/YYYY")}
                      </td>
                      <td className="border">
                        <a download className="flex justify-center items-center"><FileArrowDown size={20} className="text-green-400 transition-colors hover:text-blue-700"/></a>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        ) : (
          <div>Nada</div>
        )}
      </div>
    </div>
  );
}
