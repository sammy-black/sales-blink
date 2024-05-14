import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "../layout";
import Spinner from "../components/Spinner";
import Sequences from "../pages/sequences";
import CreateSequence from "../pages/sequences/createSequence";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<Spinner/>}>
      <Component {...props} />
    </Suspense>
  );
};

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index  element={<Navigate to="/sequences" /> } />
        <Route  path="sequences" element={<Sequences />} />
        <Route  path="sequences/create" element={<CreateSequence />} />
      </Route>
    </Routes>
  );
};

Router.propTypes = {};

export default Router;
