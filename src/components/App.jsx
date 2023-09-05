import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Articles from "./Articles";
import ProductSetter from "./Product-Individual/ProductSetter";
import ArticleSetter from "./articles/ArticleSetter";
import { Helmet } from "react-helmet";

export default function App() {
  return (
    <Router>
      <Helmet>
        <meta
          name="description"
          content="FreeSolar is a PTY on a mission to get out of the Eskom lane and into the Off grid lane. Having found the cheapest most efficient way to store and consume the sun's energy we invite the whole country to benefit the free energy from the sun."
        />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/knowledge-base" element={<Articles />} />
        <Route path="/knowledge-base/:name" element={<ArticleSetter />} />
        <Route path="/products/:cat/:name" element={<ProductSetter />} />
      </Routes>
    </Router>
  );
}
