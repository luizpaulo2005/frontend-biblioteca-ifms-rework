import { useEffect, useState } from "react";
import { api } from "../../../utils/axios";

export function FormCreateDiscente() {
  const [matriculas, setMatriculas] = useState([]);

  const [nome, setNome] = useState("");
  const [matricula_id, setMatriculaID] = useState("");
  const [email, setEmail] = useState("");
  const [data_nascimento, setData_nascimento] = useState("");
  const [cpf, setCpf] = useState("");

  const handleInputNomeChange = (e) => {
    const { value } = e.target;
    setNome(value);
  };

  const handleInputMatriculaChange = (e) => {
    const { value } = e.target;
    setMatriculaID(value);
  };

  const handleInputEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleInputDataChange = (e) => {
    const { value } = e.target;
    setData_nascimento(value);
  };

  const handleInputCPFChange = (e) => {
    const { value } = e.target;
    setCpf(value);
  };

  const data = { nome, matricula_id, email, data_nascimento, cpf };
  console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api
      .post("discente", data)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    api
      .get("/matriculas")
      .then((res) => {
        setMatriculas(res.data);
        console.log("Dados de matrículas obtidos com sucesso!");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
            htmlFor="matricula"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Matricula
          </label>
          <input
            type="text"
            id="matricula"
            value={matricula_id}
            list="matriculas"
            onChange={handleInputMatriculaChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
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
        <div className="mb-6">
          <label
            htmlFor="data_nascimento"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Data de Nascimento
          </label>
          <input
            type="date"
            id="data_nascimento"
            value={data_nascimento}
            onChange={handleInputDataChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="cpf"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            CPF
          </label>
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={handleInputCPFChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <datalist id="matriculas">
          {matriculas.map(({ id }) => {
            return (
              <option value={id} key={id}>
                {id}
              </option>
            );
          })}
        </datalist>
        <button
          onClick={handleSubmit}
          className="p-2 rounded-md bg-blue-600 text-white dark:bg-gray-700"
        >
          Cadastrar
        </button>
      </fieldset>
    </form>
  );
}
