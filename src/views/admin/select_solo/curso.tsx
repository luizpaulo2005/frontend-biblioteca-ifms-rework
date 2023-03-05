import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { api } from "../../../utils/axios";
import { HeaderUser } from "../../../components/header/user";

interface Curso {
  id: string;
  nome: string;
  duracao: string;
  grade: string;
  campus: {
    id: string;
    nome: string;
  };
  pesquisas: [
    {
      id: string;
      titulo: string;
    }
  ];
}

export function ASelectCursoSolo() {
  const [attributes, setAttributes] = useState<Curso>();

  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/curso/${id}`)
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
      {attributes ? (
        <Helmet>
          <title>Admin - Curso {attributes.nome}</title>
        </Helmet>
      ) : (
        <></>
      )}
      <HeaderUser />
      <div className="p-2">
        <div className="text-3xl mb-2">Curso {attributes?.nome}</div>
        <div className="border rounded-md p-2 mb-2 dark:bg-gray-700 dark:border-none">
          <div>Grade: {attributes?.grade}</div>
          <div>Duração: {attributes?.duracao}</div>
          <div>
            Campus:{" "}
            {attributes ? (
              <>{attributes.campus.nome}</>
            ) : (
              <>Curso sem Campus Cadastrado</>
            )}
          </div>
        </div>
        {attributes ? (
          <div className="border rounded-md p-2 mb-2 dark:bg-gray-700 dark:border-none">
            {attributes.pesquisas.length > 0 ? (
              <div>
                <div className="text-2xl">Pesquisas realizadas neste curso: {attributes.pesquisas.length}</div>
                {attributes.pesquisas.map(({ id, titulo }) => {
                  return (
                    <div key={id} className="mb-1">
                      <a href={`/admin/pesquisa/${id}`}>{titulo}</a>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>Atualmente este curso não possui pesquisas cadastradas </div>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
