import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { HeaderUser } from "../../../components/header/user";
import { api } from "../../../utils/axios";

export function USelectDocenteAll() {
  const [attributes, setAttributes] = useState([]);

  useEffect(() => {
    api
      .get("/docentes/all")
      .then((res) => {
        setAttributes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-screen min-h-screen p-2 dark:text-white">
      <Helmet>
        <title>Lista de Professores</title>
      </Helmet>
      <HeaderUser />
      <div>
        <div className="flex justify-between p-3">
          <div className="text-2xl">Lista de Professores</div>
        </div>
        {attributes.length > 0 ? (
          <table className="w-full">
            <thead className="bg-green-500 text-white dark:bg-green-800">
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Data de Nascimento</th>
                <th>Formação</th>
              </tr>
            </thead>
            <tbody>
              {attributes.map(
                ({ id, nome, email, data_nascimento, formacao }) => {
                  return (
                    <tr key={id} className="text-center border">
                      <td className="border">
                        <a href={`/user/docente/${id}`}>{nome}</a>
                      </td>
                      <td className="border">{email}</td>
                      <td className="border">{dayjs(data_nascimento).format("DD/MM/YYYY")}</td>
                      <td className="border">{formacao}</td>
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
