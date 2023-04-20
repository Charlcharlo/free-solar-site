import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import Home from "./Home";
import Products from "./Products"
import { standalone } from '../data/products';
import ProductTemplate from './Product-Individual/ProductTemplate';

export default function App() {
    function renderRoute(page, i) {
        return (
            <Route key={i} exact path={page.url} element={<ProductTemplate info={page} />} />
        )
    }

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/products" element={<Products />} />
                {standalone.map(renderRoute)}
            </Routes>
        </Router>
    )
}