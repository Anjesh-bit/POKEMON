import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import PokeMonList from "../components/PokeList/PokeMonList";
import { HomePageRoute } from "./LazyRoutes";
import PokeMonCreate from "../components/PokeMonCreate/PokeMonCreate";

export const Routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomePageRoute />}>
      <Route index element={<PokeMonList />} />
      <Route exact path="pokemon/create" element={<PokeMonCreate />} />
    </Route>
  )
);
