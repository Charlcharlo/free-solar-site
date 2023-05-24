import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Articles from "./Articles";
import ProductSetter from "./Product-Individual/ProductSetter";
import ArticleSetter from "./articles/ArticleSetter";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/knowledge-base" element={<Articles />} />
        <Route path="/knowledge-base/:id" element={<ArticleSetter />} />
        <Route path="/products/:cat/:id" element={<ProductSetter />} />
      </Routes>
    </Router>
  );
}
