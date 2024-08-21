import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pagina from './pages/pagina';

export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Pagina />} />

            </Routes>
        </BrowserRouter>
    );
}
//oi
