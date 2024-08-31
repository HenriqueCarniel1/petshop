import Home from "./pages/Home";
import { AppProvider } from "./context/AppContext";



function App() {
  return (
    <div className="App">
      <AppProvider>
        <Home />
      </AppProvider>
    </div>
  );
}

export default App;
