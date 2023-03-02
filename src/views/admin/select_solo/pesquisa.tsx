import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../utils/axios";
import { Helmet } from "react-helmet";
import { HeaderUser } from "../../../components/header/user";
import dayjs from "dayjs";

interface Pesquisa {
  id: string;
  titulo: string;
  resumo: string;
  data_apresentacao: string;
  palavras_chave: string;
  discentes: [
    discente: {
        id: string;
        nome: string;
    }
  ]
  docentes: [
    docente: {
        id: string;
        nome: string;
    }
  ]
}

export function ASelectPesquisaSolo() {
  const { id } = useParams();
  const [attributes, setAttributes] = useState<Pesquisa>("");

  useEffect(() => {
    api.get(`/pesquisa/${id}`).then((res) => {
      setAttributes(res.data);
      console.log(res.data);
    }).catch((err) => {
        console.log(err);
    })
  }, []);

  return (
    <div className="w-screen min-h-screen p-2 dark:text-white">
      {attributes ? (
        <Helmet>
          <title>Admin - Pesquisa {attributes.titulo}</title>
        </Helmet>
      ) : (
        <></>
      )}
      <HeaderUser/>
      <div className="p-2">
        <div className="text-3xl mb-1">Pesquisa - {attributes.titulo}</div>
        <div className="border rounded-md p-2 dark:bg-gray-700 dark:border-none">
            <div>Resumo: {attributes.resumo}</div>
            <div>Palavras-Chave: {attributes.palavras_chave}</div>
            <div>
                Discentes: {attributes ? <>{attributes.discentes.length > 0 ? <>{attributes.discentes.map(({discente})=>{
                    return (
                        <a href={`/admin/discente/${discente.id}`} key={discente.id}>{discente.nome}</a>
                    )
                })}</> : <>Não Cadastrado</>}</>
            : <></>}
            </div>
            <div>
                Docentes: {
                    attributes ? <>{attributes.docentes.length > 0 ? <>{attributes.docentes.map(({docente})=>{
                        return(
                            <a href={`/admin/docente/${id}`} key={docente.id}>{docente.nome}</a>
                        )
                    })}</> : <>Não Cadastrado</>}</> : <></>
                }
            </div>
            <div>Data de Apresentação: {dayjs(attributes.data_apresentacao).format("DD/MM/YYYY")}</div>
        </div>
      </div>
    </div>
  );
}
