import Header from "./topo/Header";
import Main from "./page/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Session from "./page/tela2/Session";
import Seats from "./page/tela3/Seats";
import Success from "./page/tela4/Success";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/session/:idMovies" element={<Session />} />
                <Route path="/seats/:idSeats" element={<Seats />} />
                <Route path="/success" element={<Success />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
