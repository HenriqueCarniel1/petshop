import { useEffect, useState } from "react";
import List from "../../components/list";
import Modal from "../../components/modal";
import axios from "axios";
import { useAppContext } from "../../context/AppContext";

interface Data {
    id: number;
    nomedono: string;
    nomepet: string;
    telefonedono: string;
    descricao: string;
    data: string;
    hora: string;
}

function Home() {
    const [data, setData] = useState<Data[]>([]);
    const [open, setOpen] = useState<boolean>(false);

    const { clicked } = useAppContext();

    useEffect(() => {
        axios.get("http://localhost:4000/users/get")
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    }, [clicked]);

    return (
        <div className="flex justify-center items-center h-[75vh]">
            <div className="w-1/2">
                <header className="mt-40">
                    <div>
                        <h1 className="font-interTight text-content-primary">Sua Agenda</h1>
                        <p className="text-paragraph-medium font-inter text-content-secondary mb-5">
                            Aqui você pode ver todos os clientes e serviços agendados para hoje
                        </p>
                    </div>
                </header>

                <main>
                    {/* <div className="space-y-6">
                        <div className="bg-background-tertiary p-6 rounded-lg">
                            <h2 className="text-xl font-interTight text-white mb-4 flex items-center">
                                <span className="mr-2">☀️</span>Manhã
                            </h2>

                        </div>

                        <div className="bg-background-tertiary p-6 rounded-lg">
                            <h2 className="text-xl font-interTight text-white mb-4 flex items-center">
                                <span className="mr-2">🐾</span>Tarde
                            </h2>

                        </div>

                        <div className="bg-background-tertiary p-6 rounded-lg">
                            <h2 className="text-xl font-interTight text-white mb-4 flex items-center">
                                <span className="mr-2">🌙</span>Noite
                            </h2>

                        </div>
                    </div> */}

                    {data.map((item, key) => (
                        <div key={key}>
                            <p className="text-content-primary">{item.nomedono}</p>
                        </div>
                    ))}

                    {open && <Modal open={open} setOpen={() => setOpen(false)} />}
                </main>

                <button
                    className="font-interTight p-3 rounded-md bg-content-brand fixed bottom-10 right-10"
                    onClick={() => setOpen(true)}
                >
                    Novo Agendamento
                </button>
            </div>
        </div>
    );
}

export default Home;
