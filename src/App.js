import './styles/App.css';
import Header from "./components/Header";
import {Fragment, useEffect, useState} from "react";
import Papers from "./components/tables/Papers";
import {loadRows} from "./useAPI/useAPI";
import {Alert} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Brands from "./components/tables/Brands";
import Countries from "./components/tables/Countries";
import BindingTypes from "./components/tables/BindingTypes";
import PaperFormats from "./components/tables/PaperFormats";
import PaperTypes from "./components/tables/PaperTypes";


function App() {
    const [papers, setPapers] = useState([])
    const [brands, setBrands] = useState([])
    const [bindingTypes, setBindingTypes] = useState([])
    const [paperTypes, setPaperTypes] = useState([])
    const [paperFormats, setPaperFormats] = useState([])
    const [countries, setCountries] = useState([])
    const [errors, setErrors] = useState('');

    const [showLoader, setShowLoader] = useState(false)

    useEffect(() => {
        loadRows(`${process.env.REACT_APP_API_HOST}/api/v1/papers`, setShowLoader, setPapers, setErrors)
    }, []);

    useEffect(() => {
        loadRows(`${process.env.REACT_APP_API_HOST}/api/v1/paper_types`, setShowLoader, setPaperTypes, setErrors)
    }, []);

    useEffect(() => {
        loadRows(`${process.env.REACT_APP_API_HOST}/api/v1/paper_formats`, setShowLoader, setPaperFormats, setErrors)
    }, []);

    useEffect(() => {
        loadRows(`${process.env.REACT_APP_API_HOST}/api/v1/countries`, setShowLoader, setCountries, setErrors)
    }, []);

    useEffect(() => {
        loadRows(`${process.env.REACT_APP_API_HOST}/api/v1/brands`, setShowLoader, setBrands, setErrors)
    }, []);

    useEffect(() => {
        loadRows(`${process.env.REACT_APP_API_HOST}/api/v1/binding_types`, setShowLoader, setBindingTypes, setErrors)
    }, []);


    return (
        <Fragment>
            <Header
                showLoader={showLoader}
            />
            <div className="container">
                {errors ?
                    <Alert
                        severity="error"
                        onClose={() => {
                            setErrors('');
                            setShowLoader(false)
                        }}
                        className="alert"
                    >
                        {errors}
                    </Alert> : null
                }
            </div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <Papers
                            papers={papers}
                            setPapers={setPapers}
                            brands={brands}
                            bindingTypes={bindingTypes}
                            paperTypes={paperTypes}
                            countries={countries}
                            paperFormats={paperFormats}
                            setErrors={setErrors}
                            setShowLoader={setShowLoader}
                        />
                    }/>
                    <Route path={"/brands"} element={
                        <Brands
                            brands={brands}
                            setBrands={setBrands}
                            countries={countries}
                            setErrors={setErrors}
                            setShowLoader={setShowLoader}
                        />
                    }/>
                    <Route path={"/countries"} element={
                        <Countries
                            setCountries={setCountries}
                            countries={countries}
                            setErrors={setErrors}
                            setShowLoader={setShowLoader}
                        />
                    }/>
                    <Route path={"/binding_types"} element={
                        <BindingTypes
                            setBindingTypes={setBindingTypes}
                            bindingTypes={bindingTypes}
                            setErrors={setErrors}
                            setShowLoader={setShowLoader}
                        />
                    }/>
                    <Route path={"/paper_formats"} element={
                        <PaperFormats
                            setPaperFormats={setPaperFormats}
                            paperFormats={paperFormats}
                            setErrors={setErrors}
                            setShowLoader={setShowLoader}
                        />
                    }/>
                    <Route path={"/paper_types"} element={
                        <PaperTypes
                            setPaperTypes={setPaperTypes}
                            paperTypes={paperTypes}
                            setErrors={setErrors}
                            setShowLoader={setShowLoader}
                        />
                    }/>
                </Routes>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
