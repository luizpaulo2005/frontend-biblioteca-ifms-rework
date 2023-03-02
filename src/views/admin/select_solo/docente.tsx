import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../utils/axios";
import { Helmet } from "react-helmet";
import { HeaderUser } from "../../../components/header/user";
import dayjs from "dayjs";

interface Docente{
  id: string;
  nome: string;
  email: string;
  formacao: string;
  data_nascimento: string;
  cpf: string;
  siape: string;
  pesquisas: [
    pesquisa: {
      id: string;
      nome: string;
    }
  ]
}

export function ASelectDocenteSolo() {
  const [attributes, setAttributes] = useState<Docente>("");

  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/docente/${id}`)
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
          <title>Admin - Professor {attributes.nome}</title>
        </Helmet>
      ) : (
        <></>
      )}
      <HeaderUser/>
      <div className="p-2">
        <div className="text-3xl mb-1">Professor - {attributes.nome}</div>
        <div className="bg-gray-700 rounded-md p-2 mb-2">
          <div>E-mail: {attributes.email}</div>
          <div>CPF: {attributes.cpf}</div>
          <div>Formação: {attributes.formacao}</div>
          <div>Data de Nascimento: {dayjs(attributes.data_nascimento).format("DD/MM/YYYY")}</div>
          <div>SIAPE: {attributes.siape}</div>
        </div>
        {attributes ? (
          <div className="bg-gray-700 rounded-md p-2 mb-2">
            {attributes.pesquisas.length > 0 ? (
              <div>
                <div className="text-2xl">Pesquisas realizadas por este aluno: {attributes.pesquisas.length}</div>
                {attributes.pesquisas.map(({pesquisa})=>{
                    return <div key={pesquisa.id} className="mb-1"><a href={`/admin/pesquisa/${pesquisa.id}`}>{pesquisa.titulo}</a></div>
                })}
              </div>
            ) : (
              <div>Atualmente este professor não possui pesquisas</div>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
