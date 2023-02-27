import { useEffect, useState } from "react";
import { HeaderUser } from "../../../components/header/user";
import { api } from "../../../utils/axios";
import * as Dialog from "@radix-ui/react-dialog"
import { Plus, X } from "phosphor-react";
import { FormCreateCampus } from "../../../components/forms/create/campus";

export function ASelectCampusAll() {
  const [attributes, setAttributes] = useState([]);

  useEffect(() => {
    api
      .get("/campus/all")
      .then((res) => {
        setAttributes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-screen min-h-screen p-2 dark:text-white">
      <HeaderUser />
      <div>
        <div className="flex justify-between p-3">
            <div className="text-2xl">Lista de Campus</div>
            <div>
                <Dialog.Root>
                    <Dialog.Trigger type="button" className="flex items-center border border-black p-2 rounded-md gap-2 transition-colors hover:border-green-500 dark:border-white">
                        <Plus size={20} className="text-dark"/>
                        Adicionar Campus
                    </Dialog.Trigger>
                    <Dialog.Portal>
                      <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />
                      <Dialog.Content className="absolute p-10 bg-zinc-200 rounded-2xl w-full max-w-md  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:text-white dark:bg-gray-800">
                        <Dialog.Close className="absolute right-6 top-6 text-zinc-400 rounded-lg hover:text-zinc-200">
                          <X size={24} aria-label="Fechar"/>
                        </Dialog.Close>
                        <Dialog.Title className="text-3xl leading-tight font-extrabold dark:text-white">
                          Adicionar Campus
                        </Dialog.Title>
                        <FormCreateCampus/>
                      </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            </div>

        </div>
        {
        attributes.length > 0 
        ? 
        <table className="w-full">
        <thead className="bg-green-500 text-white dark:bg-green-800">
        <tr>
        <th className="">Nome</th>    
        <th className="">Cidade</th>    
        <th className="">Estado</th>    
        </tr>    
        </thead>
        <tbody>
        {attributes.map(({id, nome, cidade, estado}) => (
          <tr key={id} className="text-center border">
            <td className="border">
                {nome}
            </td>
            <td className="border">
                {cidade}
            </td>
            <td className="border">
                {estado}
            </td>
            </tr>
        ))}    
        </tbody>  
        </table> 
        : 
        <div>Sem nada</div>
        } 
      </div>
    </div>
  );
}
