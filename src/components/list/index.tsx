interface Props {
    horario?: string;
    nomeCachorro?: string;
    nomeDono?: string;
    tipo?: string;
}

function List({ horario, nomeCachorro, nomeDono, tipo }: Props) {
    return (
        <div>
            <div className="flex items-center">
                <p className="mr-3 font-inter text-paragraph-medium">{horario}</p>
                <p className="mr-16 font-inter text-paragraph-medium">{nomeCachorro + " / " + nomeDono }</p>
                <p className="mr-16 font-inter text-paragraph-medium">{tipo}</p>
                <button className="font-inter text-paragraph-small">Remover agendamento</button>
            </div>

            <hr className="border-gray-400" />

        </div>
    );
}

export default List;
