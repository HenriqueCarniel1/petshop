'use client';
import { Dialog } from '@headlessui/react';
import Input from '../input/index';
import TextArea from '../textArea';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppContext } from '../../context/AppContext';

interface Props {
    open: boolean;
    setOpen: () => void;
}

export default function Modal({ open, setOpen }: Props) {
    const [nome, setNome] = useState<string>('');
    const [nomePet, setNomePet] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');
    const [data, setData] = useState<string>('');
    const [time, setTime] = useState<string>('');

    const { setClicked } = useAppContext();

    const handleSubmit = async () => {
        try {
            await axios.post("http://localhost:4000/users/add", {
                nomeDono: nome,
                nomePet: nomePet,
                telefoneDono: telefone,
                descricao: descricao,
                Data: data,
                Hora: time
            });
        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <div className="fixed inset-0 bg-black bg-opacity-50"></div>

            <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel className="relative w-full max-w-lg p-4 transform overflow-hidden rounded-lg bg-background-tertiary text-left shadow-xl transition-all">
                    <div className="bg-background-tertiary pb-4">
                        <div className="">
                            <div className=" ">
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-content-primary">
                                    <h2>Agende um Atendimento</h2>
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className='text-content-secondary font-inter'>preencha os dados do cliente para o agendamento</p>

                                    <Input
                                        nome="Nome do tutor: "
                                        icon={
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.448 15.1204C17.448 17.4342 17.448 19.3099 10 19.3099C2.552 19.3099 2.552 17.4342 2.552 15.1204C2.552 12.8066 5.88658 10.9309 10 10.9309C14.1134 10.9309 17.448 12.8066 17.448 15.1204Z" fill="#9282FA" />
                                                <path d="M10 8.13794C12.0567 8.13794 13.724 6.47069 13.724 4.41394C13.724 2.35719 12.0567 0.689941 10 0.689941C7.94325 0.689941 6.276 2.35727 6.276 4.41394C6.276 6.47061 7.94325 8.13794 10 8.13794Z" fill="#9282FA" fill-opacity="0.4" />
                                            </svg>
                                        }
                                        placeholder="Digite seu nome"
                                        type='text'
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                    />

                                    <Input
                                        nome="Nome do pet: "
                                        icon=
                                        {<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.42857 2.64285C5.72096 2.64285 5.16776 3.07307 4.8241 3.58855C4.47711 4.10902 4.28571 4.78691 4.28571 5.5C4.28571 6.21308 4.47711 6.89097 4.8241 7.41144C5.16776 7.92692 5.72096 8.35714 6.42857 8.35714C7.13619 8.35714 7.68939 7.92692 8.03304 7.41144C8.38003 6.89097 8.57143 6.21308 8.57143 5.5C8.57143 4.78691 8.38003 4.10902 8.03304 3.58855C7.68939 3.07307 7.13619 2.64285 6.42857 2.64285ZM13.5714 2.64285C12.8638 2.64285 12.3106 3.07307 11.967 3.58855C11.62 4.10902 11.4286 4.78691 11.4286 5.5C11.4286 6.21308 11.62 6.89097 11.967 7.41144C12.3106 7.92692 12.8638 8.35714 13.5714 8.35714C14.279 8.35714 14.8323 7.92692 15.1759 7.41144C15.5229 6.89097 15.7143 6.21308 15.7143 5.5C15.7143 4.78691 15.5229 4.10902 15.1759 3.58855C14.8323 3.07307 14.279 2.64285 13.5714 2.64285ZM2.14286 9.07142C1.43524 9.07142 0.882039 9.50164 0.538383 10.0171C0.191399 10.5376 0 11.2155 0 11.9286C0 12.6417 0.191399 13.3195 0.538383 13.84C0.882039 14.3555 1.43524 14.7857 2.14286 14.7857C2.85047 14.7857 3.40367 14.3555 3.74733 13.84C4.09431 13.3195 4.28571 12.6417 4.28571 11.9286C4.28571 11.2155 4.09431 10.5376 3.74733 10.0171C3.40367 9.50164 2.85047 9.07142 2.14286 9.07142ZM10 9.07142C8.2845 9.07142 7.01606 9.991 6.20377 11.1322C5.40271 12.2577 5 13.6527 5 14.7857C5 16.1059 5.79326 17.0236 6.7655 17.5749C7.72334 18.1181 8.92369 18.3571 10 18.3571C11.0763 18.3571 12.2767 18.1181 13.2345 17.5749C14.2067 17.0236 15 16.1059 15 14.7857C15 13.6527 14.5973 12.2577 13.7962 11.1322C12.9839 9.991 11.7155 9.07142 10 9.07142ZM17.8571 9.07142C17.1496 9.07142 16.5963 9.50164 16.2527 10.0171C15.9057 10.5376 15.7143 11.2155 15.7143 11.9286C15.7143 12.6417 15.9057 13.3195 16.2527 13.84C16.5963 14.3555 17.1496 14.7857 17.8571 14.7857C18.5647 14.7857 19.118 14.3555 19.4616 13.84C19.8086 13.3195 20 12.6417 20 11.9286C20 11.2155 19.8086 10.5376 19.4616 10.0171C19.118 9.50164 18.5647 9.07142 17.8571 9.07142Z" fill="#9282FA" />
                                        </svg>
                                        }
                                        placeholder="Digite o nome do pet"
                                        type='text'
                                        value={nomePet}
                                        onChange={(e) => setNomePet(e.target.value)}
                                    />

                                    <Input
                                        nome="Telefone: "
                                        icon=
                                        {<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.42857 2.64285C5.72096 2.64285 5.16776 3.07307 4.8241 3.58855C4.47711 4.10902 4.28571 4.78691 4.28571 5.5C4.28571 6.21308 4.47711 6.89097 4.8241 7.41144C5.16776 7.92692 5.72096 8.35714 6.42857 8.35714C7.13619 8.35714 7.68939 7.92692 8.03304 7.41144C8.38003 6.89097 8.57143 6.21308 8.57143 5.5C8.57143 4.78691 8.38003 4.10902 8.03304 3.58855C7.68939 3.07307 7.13619 2.64285 6.42857 2.64285ZM13.5714 2.64285C12.8638 2.64285 12.3106 3.07307 11.967 3.58855C11.62 4.10902 11.4286 4.78691 11.4286 5.5C11.4286 6.21308 11.62 6.89097 11.967 7.41144C12.3106 7.92692 12.8638 8.35714 13.5714 8.35714C14.279 8.35714 14.8323 7.92692 15.1759 7.41144C15.5229 6.89097 15.7143 6.21308 15.7143 5.5C15.7143 4.78691 15.5229 4.10902 15.1759 3.58855C14.8323 3.07307 14.279 2.64285 13.5714 2.64285ZM2.14286 9.07142C1.43524 9.07142 0.882039 9.50164 0.538383 10.0171C0.191399 10.5376 0 11.2155 0 11.9286C0 12.6417 0.191399 13.3195 0.538383 13.84C0.882039 14.3555 1.43524 14.7857 2.14286 14.7857C2.85047 14.7857 3.40367 14.3555 3.74733 13.84C4.09431 13.3195 4.28571 12.6417 4.28571 11.9286C4.28571 11.2155 4.09431 10.5376 3.74733 10.0171C3.40367 9.50164 2.85047 9.07142 2.14286 9.07142ZM10 9.07142C8.2845 9.07142 7.01606 9.991 6.20377 11.1322C5.40271 12.2577 5 13.6527 5 14.7857C5 16.1059 5.79326 17.0236 6.7655 17.5749C7.72334 18.1181 8.92369 18.3571 10 18.3571C11.0763 18.3571 12.2767 18.1181 13.2345 17.5749C14.2067 17.0236 15 16.1059 15 14.7857C15 13.6527 14.5973 12.2577 13.7962 11.1322C12.9839 9.991 11.7155 9.07142 10 9.07142ZM17.8571 9.07142C17.1496 9.07142 16.5963 9.50164 16.2527 10.0171C15.9057 10.5376 15.7143 11.2155 15.7143 11.9286C15.7143 12.6417 15.9057 13.3195 16.2527 13.84C16.5963 14.3555 17.1496 14.7857 17.8571 14.7857C18.5647 14.7857 19.118 14.3555 19.4616 13.84C19.8086 13.3195 20 12.6417 20 11.9286C20 11.2155 19.8086 10.5376 19.4616 10.0171C19.118 9.50164 18.5647 9.07142 17.8571 9.07142Z" fill="#9282FA" />
                                        </svg>
                                        }
                                        placeholder="Digite seu nome"
                                        type='tel'
                                        value={telefone}
                                        onChange={(e) => setTelefone(e.target.value)}
                                    />

                                    <TextArea value={descricao} onChange={(e: any) => setDescricao(e.target.value)} />

                                    <div className='flex justify-between'>

                                        <div className='grid focus-within:border-purple-500'>
                                            <label htmlFor="date" className='text-content-primary font-inter'>Data: </label>

                                            <div className="flex items-center text-content-primary p-2 border border-gray-500 rounded-md">
                                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19.31 11.362V9.50011C19.31 8.71889 19.307 7.32643 19.295 6.70703H0.699301C0.687267 7.32643 0.690276 8.71889 0.690276 9.50011V11.362C0.690276 14.873 0.690276 16.6284 1.78103 17.7192C2.87171 18.81 4.62723 18.81 8.13812 18.81H11.8621C15.3731 18.81 17.1286 18.81 18.2192 17.7192C19.31 16.6284 19.31 14.873 19.31 11.362Z" fill="#9282FA" fill-opacity="0.4" />
                                                    <path d="M5.28953 0.190186C5.67666 0.190186 5.99055 0.491969 5.99055 0.86429V2.22421C6.61233 2.21266 7.30931 2.21266 8.09354 2.21266H11.8323C12.6165 2.21266 13.3135 2.21266 13.9353 2.22421V0.86429C13.9353 0.491969 14.2491 0.190186 14.6363 0.190186C15.0235 0.190186 15.3374 0.491969 15.3374 0.86429V2.28391C16.6826 2.38746 17.5658 2.64174 18.2147 3.26573C18.8635 3.88972 19.1279 4.7391 19.2357 6.03284L19.3099 6.70703H0.690186V6.03284C0.797931 4.7391 1.06235 3.88972 1.7112 3.26573C2.36005 2.64174 3.24323 2.38746 4.58851 2.28391V0.86429C4.58851 0.491969 4.90241 0.190186 5.28953 0.190186Z" fill="#9282FA" />
                                                </svg>

                                                <input
                                                    type="date"
                                                    id="date"
                                                    className='bg-transparent outline-none ml-2 focus:border-purple-500 focus:outline-none'
                                                    value={data}
                                                    onChange={(e) => setData(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className='grid focus-within:border-purple-500'>
                                            <label htmlFor="time" className='text-content-primary font-inter'>Hora: </label>

                                            <div className="flex items-center text-content-primary p-2 border border-gray-500 rounded-md">
                                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19.31 11.362V9.50011C19.31 8.71889 19.307 7.32643 19.295 6.70703H0.699301C0.687267 7.32643 0.690276 8.71889 0.690276 9.50011V11.362C0.690276 14.873 0.690276 16.6284 1.78103 17.7192C2.87171 18.81 4.62723 18.81 8.13812 18.81H11.8621C15.3731 18.81 17.1286 18.81 18.2192 17.7192C19.31 16.6284 19.31 14.873 19.31 11.362Z" fill="#9282FA" fill-opacity="0.4" />
                                                    <path d="M5.28953 0.190186C5.67666 0.190186 5.99055 0.491969 5.99055 0.86429V2.22421C6.61233 2.21266 7.30931 2.21266 8.09354 2.21266H11.8323C12.6165 2.21266 13.3135 2.21266 13.9353 2.22421V0.86429C13.9353 0.491969 14.2491 0.190186 14.6363 0.190186C15.0235 0.190186 15.3374 0.491969 15.3374 0.86429V2.28391C16.6826 2.38746 17.5658 2.64174 18.2147 3.26573C18.8635 3.88972 19.1279 4.7391 19.2357 6.03284L19.3099 6.70703H0.690186V6.03284C0.797931 4.7391 1.06235 3.88972 1.7112 3.26573C2.36005 2.64174 3.24323 2.38746 4.58851 2.28391V0.86429C4.58851 0.491969 4.90241 0.190186 5.28953 0.190186Z" fill="#9282FA" />
                                                </svg>

                                                <input
                                                    type="time"
                                                    id="time"
                                                    className='bg-transparent outline-none ml-2 focus:border-purple-500 focus:outline-none'
                                                    value={time}
                                                    onChange={(e) => setTime(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end bg-background-tertiary px-4 py-3">
                        <button
                            type="button"
                            data-autofocus
                            className=" bg-white px-3 py-2 rounded-md text-sm font-interTight text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            onClick={setOpen}
                        >
                            Cancel
                        </button>

                        <button
                            type="button"
                            className="bg-background-brand rounded-md p-2 font-interTight ml-4"
                            onClick={() => { handleSubmit(); setOpen();  setClicked() }}
                        >
                            Agendar
                        </button>
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
}
