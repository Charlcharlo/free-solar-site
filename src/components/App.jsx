import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import { standalone, extras, conversions, onGrid } from "../data/products";
import ProductTemplate from "./Product-Individual/ProductTemplate";
import Articles from "./Articles";
import { articlesChapters } from "../data/articles";
// import Template from './articles/Template';
import TemplateChapters from "./articles/TemplateChapters";
import { kebabCase } from "lodash";

export default function App() {
  function renderRouteProducts(page, i) {
    return (
      <Route
        key={i}
        exact
        path={page.url}
        element={<ProductTemplate info={page} />}
      />
    );
  }

  function renderRouteArticle(page, i) {
    if (page.published) {
      const url = kebabCase(page.title);
      return (
        <Route
          key={i}
          exact
          path={`/knowledge-base/${url}`}
          element={<TemplateChapters info={page} />}
        />
      );
    } else return null;
  }

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        {standalone.map(renderRouteProducts)}
        {onGrid.map(renderRouteProducts)}
        {conversions.map(renderRouteProducts)}
        {extras.map(renderRouteProducts)}
        <Route exact path="/knowledge-base" element={<Articles />} />
        {articlesChapters.map(renderRouteArticle)}
      </Routes>
    </Router>
  );
}
