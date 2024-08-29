interface Props {
    onClick?: () => void;
}

function Button({ onClick }: Props) {
    return (
        <button
            onClick={onClick}
            className="p-2 font-interTight bg-background-brand rounded-md hover:bg-background-highlights"
        >
            Agendar
        </button>
    );
}

export default Button;
