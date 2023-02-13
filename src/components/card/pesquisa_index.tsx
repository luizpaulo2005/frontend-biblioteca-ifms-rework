interface CardProps {
    id: string;
    titulo: string;
}

export function CardIndex(props: CardProps){
    return(
        <div key={props.id} className="w-56 h-36 border rounded-md pt-2 pl-2 pr-2 flex flex-col justify-center dark:text-white dark:bg-gray-800">
        <div className="font-semibold text-center w-full">{props.titulo}</div>
        <div className="flex justify-end w-full mt-2">
        <a href={`/user/pesquisa/${props.id}`} className="self-end bg-blue-600 rounded-md text-white text-center w-24 p-2 transition-colors hover:bg-blue-800">Ver Mais</a>
        </div>
        </div>
    )
}