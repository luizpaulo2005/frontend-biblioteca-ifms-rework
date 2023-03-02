import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../utils/axios";
import { Helmet } from "react-helmet";
import { HeaderUser } from "../../../components/header/user";
import dayjs from "dayjs";

interface Discente {
  id: string;
  nome: string;
  email: string;
  data_nascimento: string;
  cpf: string;
  matricula_id: string;
  pesquisas: [
    pesquisa: {
      id: string;
      titulo: string;
    }
  ];
}

export function ASelectDiscenteSolo() {
  const [attributes, setAttributes] = useState<Discente>("");
  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/discente/${id}`)
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
          <title>Admin - Aluno {attributes.nome}</title>
        </Helmet>
      ) : (
        <></>
      )}
      <HeaderUser />
      <div className="p-2">
        <div className="text-3xl mb-1">Aluno - {attributes.nome}</div>
        <div className="border rounded-md p-2 mb-2 dark:bg-gray-700 dark:border-none">
          <div>Email: {attributes.email}</div>
          <div>
            Data de Nascimento:{" "}
            {dayjs(attributes.data_nascimento).format("DD/MM/YYYY")}
          </div>
          <div>
            CPF: {attributes.cpf != "" ? attributes.cpf : <>Não cadastrado</>}
          </div>
          <div>Matricula: {attributes.matricula_id}</div>
        </div>
        {attributes ? (
          <div className="border rounded-md p-2 mb-2 dark:bg-gray-700 dark:border-none">
            {attributes.pesquisas.length > 0 ? (
              <div>
                <div className="text-2xl">Pesquisas realizadas por este aluno: {attributes.pesquisas.length}</div>
                {attributes.pesquisas.map(({pesquisa})=>{
                    return <div key={pesquisa.id} className="mb-1"><a href={`/admin/pesquisa/${pesquisa.id}`}>{pesquisa.titulo}</a></div>
                })}
              </div>
            ) : (
              <div>Atualmente este aluno não possui pesquisas</div>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
