import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { HeaderUser } from "../../../components/header/user";
import * as Dialog from "@radix-ui/react-dialog";
import { Plus, X } from "phosphor-react";
import { FormCreateMatricula } from "../../../components/forms/create/matricula";
import { api } from "../../../utils/axios";
import dayjs from "dayjs";

export function ASelectMatriculaAll() {
  const [attributes, setAttributes] = useState([]);

  useEffect(() => {
    api
      .get("/matriculas/all")
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
        <title>Admin - Lista de Matrículas</title>
      </Helmet>
      <HeaderUser />
      <div>
        <div className="flex justify-between p-3">
          <div className="text-2xl">Lista de Matriculas</div>
          <Dialog.Root>
            <Dialog.Trigger
              type="button"
              className="flex items-center border border-black p-2 rounded-md gap-2 transition-colors hover:border-green-500 dark:border-white"
            >
              <Plus size={20} className="text-dark" />
              Adicionar Matrícula
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />
              <Dialog.Content className="absolute p-10 bg-zinc-200 rounded-2xl w-full max-w-md  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:text-white dark:bg-gray-800">
                <Dialog.Close className="absolute right-6 top-6 text-zinc-400 rounded-lg hover:text-zinc-200">
                  <X size={24} aria-label="Fechar" />
                </Dialog.Close>
                <Dialog.Title className="text-3xl leading-tight font-extrabold dark:text-white">
                  Adicionar Matrícula
                </Dialog.Title>
                <FormCreateMatricula />
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
                {attributes.length > 0 ? 
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Pertence a</th>
                    <th>Data Início</th>
                    <th>Curso</th>
                </tr>
            </thead>
            <tbody>
            {attributes.map(({id, data_inicio, discente, curso})=>{
                return (
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{discente.nome}</td>
                        <td>{dayjs(data_inicio).format("DD/MM/YYYY")}</td>
                        <td>{curso.nome}</td>
                    </tr>
                ) 
    
            })}
            </tbody>
        </table>
                :
                <div> Nada </div>}
      </div>
    </div>
  );
}
