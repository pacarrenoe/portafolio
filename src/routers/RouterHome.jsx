import { Route, Routes } from "react-router-dom";
import Homeout from "../modules/homeout/screen/Homeout";

const RouterHome = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Homeout />} />
      </Routes>
    </>
  );
};

export default RouterHome;
