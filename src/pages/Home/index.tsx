import { useEffect, useState } from "react";
import List from "../../components/list";
import Modal from "../../components/modal";
import axios from "axios";

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

    const morningData = data.filter(item => item.hora >= "05:00" && item.hora < "12:00");
    const afternoonData = data.filter(item => item.hora >= "12:00" && item.hora < "18:00");
    const nightData = data.filter(item => item.hora >= "18:00" && item.hora < "24:00");

    useEffect(() => {
        axios.get("http://localhost:4000/users/get")
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    }, [open]);
    
    useEffect(() => {
        axios.get("http://localhost:4000/users/get")
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    }, [open]);

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
                    <div className="space-y-6">
                        <div className="bg-background-tertiary p-6 rounded-lg">
                            <h2 className="text-xl font-interTight text-white mb-4 flex items-center">
                                <span className="mr-2">☀️</span>Manhã
                            </h2>
                            {morningData.length > 0 ? (
                                <List data={morningData} />
                            ) : (
                                <p className="text-white">Nenhum agendamento para a manhã.</p>
                            )}
                        </div>

                        <div className="bg-background-tertiary p-6 rounded-lg">
                            <h2 className="text-xl font-interTight text-white mb-4 flex items-center">
                                <span className="mr-2">🐾</span>Tarde
                            </h2>
                            {afternoonData.length > 0 ? (
                                <List data={afternoonData} />
                            ) : (
                                <p className="text-white">Nenhum agendamento para a tarde.</p>
                            )}
                        </div>

                        <div className="bg-background-tertiary p-6 rounded-lg">
                            <h2 className="text-xl font-interTight text-white mb-4 flex items-center">
                                <span className="mr-2">🌙</span>Noite
                            </h2>
                            {nightData.length > 0 ? (
                                <List data={nightData} />
                            ) : (
                                <p className="text-white">Nenhum agendamento para a noite.</p>
                            )}
                        </div>
                    </div>
                    {
                        open && <Modal open={open} setOpen={() => setOpen(false)} />
                    }
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
