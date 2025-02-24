import { Route, Routes } from "react-router-dom";
import { ButtonPage } from "./ButtonPage";
import { Counter } from "./Counter";
import { CRUD } from "./CRUD";
import { Header } from "../components/Header/header";
import { StaticList } from "./StaticList";


export const PagesRoutes = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Header />
                <div className="flex justify-center items-center pt-8">
                    <div className="grid h-screen[calc(100vh-2rem)] place-items-center">
                        <Routes>
                            <Route path="/" element={<ButtonPage />} />
                            <Route path="button" element={<ButtonPage />} />
                            <Route path="counter" element={<Counter />} />
                            <Route path="static-list" element={<StaticList />} />
                            <Route path="crud" element={<CRUD />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    );
};