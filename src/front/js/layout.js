import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Footer } from "./component/footer";
import Contactos from "./pages/contacs.jsx";
import AddContact from "./pages/addContact.jsx";
import EditContact from "./pages/editContact.jsx";
//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Routes>
                        <Route element={<Contactos />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<AddContact />} path="/add-contact" />
                        {/* <Route element={<EditContact />} path="/edit-contact" /> */}
                        <Route element={<h1>EStoy en la vista de 4Geeks</h1>} path="/4geeks" />
                        <Route element={<EditContact />} path="/edit-contact/:index" />
                        <Route element={<h1>Not found! 404</h1>} path="*" />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
