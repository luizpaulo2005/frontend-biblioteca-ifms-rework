import { FormEvent, useEffect, useState } from "react";
import { api } from "../../../utils/axios";

export function FormCreateCurso() {
  const [campus, setCampus] = useState([]);

  const [nome, setNome] = useState("");
  const [grade, setGrade] = useState<number>();
  const [duracao, setDuracao] = useState("");
  const [campus_id, setCampusId] = useState("");

  const handleInputNomeChange = (e) => {
    const { value } = e.target;
    setNome(value);
  };

  const handleInputGradeChange = (e) => {
    const { value } = e.target;
    setGrade(Math.floor(value));
  };

  const handleInputDuracaoChange = (e) => {
    const { value } = e.target;
    setDuracao(value);
  };

  const handleInputCampusChange = (e) => {
    const { value } = e.target;
    setCampusId(value);
  };

  const data = { nome, grade, duracao, campus_id };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await api
      .post("/curso", data)
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
      .get("/campus")
      .then((res) => {
        setCampus(res.data);
        console.log("Dados de campus obtidos com sucesso");
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
            htmlFor="grade"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Grade
          </label>
          <input
            type="number"
            id="grade"
            value={grade}
            onChange={handleInputGradeChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="duracao"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Duração
          </label>
          <input
            type="text"
            id="duracao"
            value={duracao}
            onChange={handleInputDuracaoChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="campus_id"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Campus
          </label>
          <input
            type="text"
            id="campus_id"
            list="campus_list"
            value={campus_id}
            onChange={handleInputCampusChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <datalist id="campus_list">
          {campus.map(({ id, nome }) => {
            return (
              <option key={id} value={id}>
                {nome}
              </option>
            );
          })}
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
