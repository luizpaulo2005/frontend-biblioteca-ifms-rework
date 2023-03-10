import { FormEvent, useState } from "react";
import { api } from "../../../utils/axios";

export function FormCreateCampus() {
  const [nome, setNome] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [email, setEmail] = useState("");

  const handleInputNomeChange = (e: FormEvent) => {
    const { value } = e.target as HTMLFormElement;
    setNome(value);
  };

  const handleInputCidadeChange = (e: FormEvent) => {
    const { value } = e.target as HTMLFormElement;
    setCidade(value);
  };

  const handleInputEstadoChange = (e: FormEvent) => {
    const { value } = e.target as HTMLFormElement;
    setEstado(value);
  };

  const handleInputEmailChange = (e: FormEvent) => {
    const { value } = e.target as HTMLFormElement;
    setEmail(value);
  };

  const data = { nome, cidade, estado, email };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await api
      .post("/campus", data)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form>
      <fieldset className="p-3">
        <div className="mb-6">
          <label
            htmlFor="nome"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nome
          </label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={handleInputNomeChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="cidade"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Cidade
          </label>
          <input
            type="text"
            id="cidade"
            value={cidade}
            onChange={handleInputCidadeChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="estado"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Estado
          </label>
          <input
            type="text"
            id="estado"
            value={estado}
            onChange={handleInputEstadoChange}
            list="estados"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleInputEmailChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>

        <datalist id="estados">
          <option value="AC">Acre</option>
          <option value="AL">Alagoas</option>
          <option value="AP">Amap??</option>
          <option value="AM">Amazonas</option>
          <option value="BA">Bahia</option>
          <option value="CE">Cear??</option>
          <option value="DF">Distrito Federal</option>
          <option value="ES">Esp??rito Santo</option>
          <option value="GO">Goi??s</option>
          <option value="MA">Maranh??o</option>
          <option value="MT">Mato Grosso</option>
          <option value="MS">Mato Grosso do Sul</option>
          <option value="MG">Minas Gerais</option>
          <option value="PA">Par??</option>
          <option value="PB">Para??ba</option>
          <option value="PR">Paran??</option>
          <option value="PE">Pernambuco</option>
          <option value="PI">Piau??</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="RN">Rio Grande do Norte</option>
          <option value="RS">Rio Grande do Sul</option>
          <option value="RO">Rond??nia</option>
          <option value="RR">Roraima</option>
          <option value="SC">Santa Catarina</option>
          <option value="SP">S??o Paulo</option>
          <option value="SE">Sergipe</option>
          <option value="TO">Tocantins</option>
        </datalist>

        <button
          onClick={handleSubmit}
          className="p-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white transition-colors dark:bg-gray-700 dark:hover:bg-gray-500"
        >
          Cadastrar
        </button>
      </fieldset>
    </form>
  );
}
