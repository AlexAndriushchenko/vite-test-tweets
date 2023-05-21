import { lazy } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { GlobalStyle } from "../../globalStyles/globalStyle";

const Home = lazy(() => import("../../pages/Home/Home"));
const Tweets = lazy(() => import("../../pages/Tweets/Tweets"));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/tweets" element={<Tweets />}></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};

export default App;
