import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface ItemData {
    id: number;
    hora: string;
    nomepet: string;
    nomedono: string;
    descricao: string;
    data: string;
}

const List = ({ data }: { data: ItemData[] }) => {
    const [items, setItems] = useState<ItemData[]>(data);

    const remove = async (id: number) => {
        try {
            await axios.delete(`http://localhost:4000/users/delete/${id}`);
            setItems((prevItems) => prevItems.filter((item) => item.id !== id));
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    useEffect(() => {
        setItems(data);
    }, [data]);

    return (
        <div>
            {items.map((item) => (
                <div key={item.id} className="flex sm:justify-between items-center p-6 max-sm:grid w-full border-y border-border-primary">
                    <div className="flex">
                        <p className="font-interTight text-inter text-content-primary mb-0 mr-4">{item.hora}</p>
                        <p className="font-interTight text-paragraph-medium text-content-primary mb-0">{item.nomepet}</p>
                        <p className="font-interTight text-paragraph-medium text-content-primary mb-0 px-2"> / </p>
                        <p className="font-interTight text-paragraph-medium text-content-secondary mb-0">{item.nomedono}</p>
                    </div>
                    <p className="font-interTight text-paragraph-medium text-content-secondary mb-0">{item.descricao}</p>
                    <button className="font-inter max-sm:flex max-sm:justify-end text-paragraph-medium text-content-secondary" onClick={() => remove(item.id)}>Remover agendamento</button>
                </div>
            ))}
        </div>
    );
};

export default List;
