import { useState, useEffect } from "react";
import { HeaderUser } from "../../../components/header/user";
import { api } from "../../../utils/axios";
import { Helmet } from "react-helmet";

export function USelectCursoAll() {
  const [attributes, setAttributes] = useState([]);

  useEffect(() => {
    api
      .get("/cursos/all")
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
        <title>Lista de Cursos</title>
      </Helmet>
      <HeaderUser />
      <div>
        <div className="flex justify-between p-3">
          <div className="text-2xl">Lista de Cursos</div>
        </div>
        {attributes.length > 0 ? (
          <table className="w-full">
            <thead className="bg-green-500 text-white dark:bg-green-800">
              <tr>
                <th>Nome</th>
                <th>Duração</th>
                <th>Grade</th>
                <th>Campus</th>
              </tr>
            </thead>
            <tbody>
              {attributes.map(({ id, nome, duracao, grade, campus }) => {
                return (
                  <tr key={id} className="text-center border">
                    <td className="border">
                      <a href={`/user/curso/${id}`}>{nome}</a>
                    </td>
                    <td className="border">{duracao}</td>
                    <td className="border">{grade}</td>
                    <td className="border">{campus.nome}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div>Nada</div>
        )}
      </div>
    </div>
  );
}
