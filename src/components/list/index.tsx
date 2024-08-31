interface Props {
    horario?: string;
    nomeCachorro?: string;
    nomeDono?: string;
    tipo?: string;
}

function List({ horario, nomeCachorro, nomeDono, tipo }: Props) {
    return (
        <div>
            <div className="flex justify-between items-center p-6">
                <div className="flex">
                <p className="font-interTight text-inter text-content-primary mb-0 mr-4">{horario}12:00</p>
                <p className="font-interTight text-paragraph-medium text-content-primary mb-0">{nomeCachorro}asdfasdfsaf / </p>
                <p className="font-interTight text-paragraph-medium text-content-secondary mb-0">{nomeDono}asfdfasdf</p>
                </div>

                <p className="font-inter text-paragraph-medium text-content-secondary mb-0">{tipo}sdvsvsdvds</p>
                <button className="font-inter text-paragraph-small text-content-secondary">Remover agendamento</button>
            </div>

        </div>
    );
}

export default List;
