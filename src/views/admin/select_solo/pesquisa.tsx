import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../../utils/axios"

interface AttributesProps {
    id: string;
    titulo: string;
}

export function ASelectPesquisaSolo(){
    const { id } = useParams()
    const [ attributes, setAttributes ] = useState<AttributesProps>({})

    useEffect(()=>{
        api.get(`/pesquisa/${id}`).then(res=>{
            setAttributes(res.data)
            console.log(res.data)
        })
    }, [])

    return(
        <div>
            {

                    <div key={attributes.id}>{attributes.titulo}</div>

            }
        </div>
    )
}