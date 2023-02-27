import { useEffect, useState } from "react"
import { api } from "../../../utils/axios"

export function FormCreateMatricula(){
    const [cursos, setCursos] = useState([])

    const [id, setId] = useState("")
    const [data_inicio, setData] = useState("")
    const [curso_id, setCursoID] = useState("")


    const data = {id, data_inicio, curso_id}

    useEffect(()=>{
        api.get("/cursos").then((res)=>{
            setCursos(res.data)
            console.log("Dados de cursos obtidos com sucesso!")
        }).catch((err)=>{
            console.log(err)
        })
    }, [])

    return(
        <div></div>
    )
}