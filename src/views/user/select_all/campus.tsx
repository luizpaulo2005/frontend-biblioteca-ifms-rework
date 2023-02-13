import { useEffect, useState } from "react";
import { HeaderUser } from "../../../components/header/user";
import { api } from "../../../utils/axios";

export function USelectCampusAll() {
  const [attributes, setAttributes] = useState([]);

  useEffect(() => {
    api.get("/campus/all").then((res) => setAttributes(res.data));
  }, []);
  return (
    <div className="w-screen h-screen p-2">
      <HeaderUser />
      <div className="mt-4 shadow-md rounded-md overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Campus
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nome
                </th>
                <th scope="col" className="px-6 py-3">
                  Cidade
                </th>
                <th scope="col" className="px-6 py-3">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody>
              {attributes.map(({ id, nome, cidade, estado }) => {
                return (
                  <tr
                    key={id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                      {nome}
                    </th>
                    <td>{cidade}</td>
                    <td>{estado}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
  );
}
