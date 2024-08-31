interface Props {
    value: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function TextArea({ value, onChange }: Props) {
    return (
        <div>
            <label htmlFor="" className="text-content-primary font-inter">Descrição do serviço: </label>
            <textarea
                className="bg-transparent w-full outline-none p-2 text-content-secondary font-inter border-1 border-gray-500 rounded-lg h-32"
                placeholder="Banho e tosa..."
                value={value}
                onChange={onChange}
            />
        </div>
    );
}


export default TextArea;