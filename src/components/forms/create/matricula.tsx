import { FormEvent, useEffect, useState } from "react";
import { api } from "../../../utils/axios";

export function FormCreateMatricula() {
  const [cursos, setCursos] = useState([]);

  const [id, setId] = useState("");
  const [data_inicio, setData] = useState("");
  const [curso_id, setCursoID] = useState("");

  const handleInputIDChange = (e: FormEvent) => {
    const { value } = e.target as HTMLFormElement;
    setId(value);
  };

  const handleInputDataChange = (e: FormEvent) => {
    const { value } = e.target as HTMLFormElement;
    setData(value);
  };

  const handleInputCursoChange = (e: FormEvent) => {
    const { value } = e.target as HTMLFormElement;
    setCursoID(value);
  };

  const data = { id, data_inicio, curso_id };

  useEffect(() => {
    api
      .get("/cursos")
      .then((res) => {
        setCursos(res.data);
        console.log("Dados de cursos obtidos com sucesso!");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div></div>;
}
