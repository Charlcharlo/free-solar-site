import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import Home from "./Home";
import Products from './Products';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/products" element={<Products />} />
            </Routes>
        </Router>
    )
}