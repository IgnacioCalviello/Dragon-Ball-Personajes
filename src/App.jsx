import { Route } from "wouter";
import { Switch } from "wouter";
import Navbar from "./components/navbar";
import { lazy, Suspense } from "react";

// import PageHome from "./pages/home";
// import PageNotFound from "./pages/page-404";
// import PageListPersonajes from "./pages/list-personajes";
// import PageDetallePersonaje from "./pages/detalle-personaje";

const PageHome = lazy(() => import("./pages/home"));
const PageNotFound = lazy(() => import("./pages/page-404"));
const PageListPersonajes = lazy(() => import("./pages/list-personajes"));
const PageDetallePersonaje = lazy(() => import("./pages/detalle-personaje"));

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<p>Lazy Loading...</p>}>
        <Switch>
          <Route path="/">
            <PageHome />
          </Route>
          <Route path="/personajes">
            <PageListPersonajes />
          </Route>
          <Route path="/personajes/:id">
            <PageDetallePersonaje />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
