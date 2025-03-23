import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokemonList from '../pages/pokemon-list';
import PokemonDetails from '../pages/pokemon-details';

function AppRoutes () {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<PokemonList />} />
                <Route exatc path="/pokemon/:id" element={<PokemonDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export { AppRoutes };