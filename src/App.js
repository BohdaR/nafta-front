import './styles/App.css';
import Header from "./components/Header";
import {Fragment, useEffect, useState} from "react";
import Papers from "./components/tables/Papers";
import {get} from "./useAPI/useAPI";
import {Alert} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Brands from "./components/tables/Brands";
import Countries from "./components/tables/Countries";


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
        setShowLoader(true);
        get(`${process.env.REACT_APP_API_HOST}/api/v1/papers`)
            .then(
                (response) => {
                    setShowLoader(false);
                    setPapers(response.data);
                })
            .catch(
                (errors) => {
                    console.log(errors)
                    setErrors('Cannot connect to the database!')
                }
            )
    }, []);

    useEffect(() => {
        get(`${process.env.REACT_APP_API_HOST}/api/v1/paper_types`)
            .then(
                (response) => {
                    setPaperTypes(response.data);
                })
    }, []);

    useEffect(() => {
        get(`${process.env.REACT_APP_API_HOST}/api/v1/paper_formats`)
            .then(
                (response) => {
                    setPaperFormats(response.data);
                })
    }, []);

    useEffect(() => {
        get(`${process.env.REACT_APP_API_HOST}/api/v1/countries`)
            .then(
                (response) => {
                    setCountries(response.data);
                })
    }, []);

    useEffect(() => {
        get(`${process.env.REACT_APP_API_HOST}/api/v1/brands`)
            .then(
                (response) => {
                    setBrands(response.data);
                })
    }, []);

    useEffect(() => {
        get(`${process.env.REACT_APP_API_HOST}/api/v1/binding_types`)
            .then(
                (response) => {
                    setBindingTypes(response.data);
                })
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
                            setShowLoader={setShowLoader}
                            bindingTypes={bindingTypes}
                            paperTypes={paperTypes}
                            countries={countries}
                            paperFormats={paperFormats}
                            setErrors={setErrors}
                        />
                    }/>
                    <Route path={"/brands"} element={
                        <Brands
                            brands={brands}
                            setBrands={setBrands}
                            setErrors={setErrors}
                            countries={countries}
                            setShowLoader={setShowLoader}
                        />
                    }/>
                    <Route path={"/countries"} element={
                        <Countries
                            setCountries={setCountries}
                            setErrors={setErrors}
                            countries={countries}
                            setShowLoader={setShowLoader}
                        />
                    }/>
                </Routes>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
