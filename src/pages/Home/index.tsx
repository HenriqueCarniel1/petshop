import List from "../../components/list";

function Home() {
    return (
        <div className="flex justify-center items-center h-[75vh]">
            <div className="w-1/2">
                <header className="mt-40">
                    <div>
                        <h1 className="font-interTight text-content-primary">Sua Agenda</h1>
                        <p className="text-paragraph-medium font-inter text-content-secondary mb-5">Aqui você pode ver todos os clientes e serviços agendados para hoje</p>
                    </div>
                </header>

                <main>
                    <div className="space-y-6">
                        <div className="bg-background-tertiary p-6 rounded-lg">
                            <h2 className="text-xl font-interTight text-white mb-4 flex items-center">
                                <span className="mr-2">☀️</span>Manhã
                            </h2>
                            <List />
                        </div>

                        <div className="bg-background-tertiary p-6 rounded-lg">
                            <h2 className="text-xl font-interTight text-white mb-4 flex items-center">
                                <span className="mr-2">🐾</span>Tarde
                            </h2>
                            <List />
                        </div>

                        <div className="bg-background-tertiary p-6 rounded-lg">
                            <h2 className="text-xl font-interTight text-white mb-4 flex items-center">
                                <span className="mr-2">🌙</span>Noite
                            </h2>
                            <List />
                        </div>
                    </div>
                </main>
            </div>
        </div>

    );
}

export default Home;