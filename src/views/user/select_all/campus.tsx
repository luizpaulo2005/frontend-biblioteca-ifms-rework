import { useEffect, useState } from "react";
import { HeaderUser } from "../../../components/header/user";
import { api } from "../../../utils/axios";
import { Helmet } from "react-helmet";

export function USelectCampusAll() {
  const [attributes, setAttributes] = useState([]);

  useEffect(() => {
    api
      .get("/campus/all")
      .then((res) => setAttributes(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  return (
    <div className="w-screen min-h-screen p-2 dark:text-white">
      <Helmet>
        <title>Lista de Campus</title>
      </Helmet>
      <HeaderUser />
      <div>
        <div className="flex justify-between p-3">
          <div className="text-2xl">Lista de Campus</div>
        </div>
        {attributes.length > 0 ? (
          <table className="w-full">
            <thead className="bg-green-500 text-white dark:bg-green-800">
              <tr>
                <th>Nome</th>
                <th>Cidade</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {attributes.map(({ id, nome, cidade, estado }) => (
                <tr key={id} className="text-center border">
                  <td className="border">
                    <a href={`/user/campus/${id}`}>{nome}</a>
                  </td>
                  <td className="border">{cidade}</td>
                  <td className="border">{estado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>Sem nada</div>
        )}
      </div>
    </div>
  );
}
