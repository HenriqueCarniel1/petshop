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
    let [date, setDate] = useState<string>('')

    const morningData = data.filter(item => item.hora >= "05:00" && item.hora < "12:00");
    const afternoonData = data.filter(item => item.hora >= "12:00" && item.hora < "18:00");
    const nightData = data.filter(item => item.hora >= "18:00" && item.hora < "24:00");

    const fetchData = () => {
        if(!date) {
            date = new Date().toISOString().split('T')[0]
        }
        axios.get(`https://api-petshop-n320.onrender.com/users/get/${date}`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    };

    useEffect(() => {
        fetchData()
    }, [open, date]);

    return (
        <div className="flex justify-center items-center h-[75vh]">
            <div className="w-[50rem] p-4">
                <header className="mt-40 flex">
                    <div className="w-3/4">
                        <h1 className="font-interTight text-content-primary">Sua Agenda</h1>
                        <p className="text-paragraph-medium font-inter text-content-secondary mb-5">
                            Aqui você pode ver todos os clientes e serviços agendados para hoje
                        </p>
                    </div>
                    <div className="flex items-center w- justify-end">
                        <div className="flex items-center border-1 border-border-primary p-2 rounded-md">
                            <i>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_5121_163)">
                                        <path d="M19.31 11.862V10.0001C19.31 9.21886 19.307 7.8264 19.295 7.207H0.699301C0.687267 7.8264 0.690276 9.21886 0.690276 10.0001V11.862C0.690276 15.373 0.690276 17.1284 1.78103 18.2192C2.87171 19.3099 4.62723 19.3099 8.13812 19.3099H11.8621C15.3731 19.3099 17.1286 19.3099 18.2192 18.2192C19.31 17.1284 19.31 15.373 19.31 11.862Z" fill="#9282FA" fillOpacity="0.4" />
                                        <path d="M5.28965 0.690155C5.67678 0.690155 5.99067 0.991938 5.99067 1.36426V2.72418C6.61245 2.71263 7.30943 2.71263 8.09366 2.71263H11.8325C12.6166 2.71263 13.3136 2.71263 13.9354 2.72418V1.36426C13.9354 0.991938 14.2493 0.690155 14.6365 0.690155C15.0236 0.690155 15.3375 0.991938 15.3375 1.36426V2.78388C16.6828 2.88743 17.5659 3.14171 18.2148 3.7657C18.8636 4.38969 19.1281 5.23907 19.2358 6.53281L19.31 7.207H0.690308V6.53281C0.798053 5.23907 1.06247 4.38969 1.71132 3.7657C2.36017 3.14171 3.24335 2.88743 4.58863 2.78388V1.36426C4.58863 0.991938 4.90253 0.690155 5.28965 0.690155Z" fill="#9282FA" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_5121_163">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </i>
                            <input
                                type="date"
                                className="bg-transparent outline-none font-inter p-2 w-full text-content-primary border-0 focus:outline-none color"
                                defaultValue={new Date().toISOString().split('T')[0]}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                    </div>
                </header>

                <main>
                    <div className="space-y-6">
                        <div className=" bg-background-tertiary max-sm:p-2  sm:p-6 rounded-lg">
                            <h2 className="flex justify-between text-xl font-interTight text-white mb-4 items-center">
                                <span className="mr-2">☀️ Manhã</span>
                                <h5 className="font-inter text-title text-content-secondary">05h-12h</h5>
                            </h2>
                            {morningData.length > 0 ? (
                                <List data={morningData} />
                            ) : (
                                null
                            )}

                        </div>

                        <div className="bg-background-tertiary p-6 rounded-lg">
                            <h2 className="flex justify-between text-xl font-interTight text-white mb-4 items-center">
                                <span className="mr-2">🐾 Tarde</span>
                                <h5 className="font-inter text-title text-content-secondary">12h-18h</h5>
                            </h2>
                            {afternoonData.length > 0 ? (
                                <List data={afternoonData} />
                            ) : (
                                null
                            )}
                        </div>

                        <div className="bg-background-tertiary p-6 rounded-lg">
                            <h2 className="flex justify-between text-xl font-interTight text-white mb-4 items-center">
                                <span className="mr-2">🌙 Noite</span>
                                <h5 className="font-inter text-title text-content-secondary">18h-23h</h5>
                            </h2>
                            {nightData.length > 0 ? (
                                <List data={nightData} />
                            ) : (
                                null
                            )}
                        </div>
                    </div>
                    {
                        open && <Modal open={open} setOpen={() => setOpen(false)} onCloseModal={fetchData} />
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
