import { PagesRoutes } from "@/pages/PagesRoutes";
import { Routes, Route } from "react-router-dom";

export const AppRouter = () => {
  return (
    <>  
      <Routes>
        <Route path="/*" element={<PagesRoutes/>} />
      </Routes>
    </>
  );
};