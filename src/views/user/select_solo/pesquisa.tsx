import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../../utils/axios"
import { Helmet } from "react-helmet";


export function USelectPesquisaSolo(){
    const { id } = useParams()
    const [ attributes, setAttributes ] = useState("")

    useEffect(()=>{
        api.get(`/pesquisa/${id}`).then(res=>{
            setAttributes(res.data)
            console.log(res.data)
        })
    }, [])

    return(
        <div>
            <Helmet>
                <title>{attributes.titulo}</title>
            </Helmet>
            {

                    <div key={attributes.id}>{attributes.titulo}</div>

            }
        </div>
    )
}