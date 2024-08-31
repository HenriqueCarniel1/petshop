interface Props {
    nome: string,
    icon: any;
    placeholder: string,
    type: string
}

function Input({nome, icon, placeholder, type}: Props) {
    return ( 
        <div>
        <label htmlFor="" className='text-content-primary font-inter'>{nome}</label>
        <div className='flex border-1 border-gray-500 rounded-lg items-center mb-4'>
            {icon}

            <input className='bg-transparent w-100 outline-none p-2 text-content-secondary font-inter' type={type} placeholder={placeholder} />
        </div>
    </div>
     );
}

export default Input;