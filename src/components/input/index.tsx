import React from 'react';

interface Props {
    nome: string;
    icon: JSX.Element; 
    placeholder: string;
    type: string;
    value: string | number | undefined;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ nome, icon, placeholder, type, value, onChange }: Props) {
    return (
        <div>
            <label htmlFor="" className='text-content-primary font-inter'>{nome}</label>
            <div className='flex border-1 border-gray-500 rounded-lg items-center mb-4'>
                <i className='ml-2'>{icon}</i>
                <input
                    className='bg-transparent w-100 outline-none p-2 text-content-secondary font-inter'
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    );
}

export default Input;
