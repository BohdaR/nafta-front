import './styles/App.css';
import Header from "./components/Header";
import {Fragment, useEffect, useState} from "react";
import Papers from "./components/tables/Papers";
import {get} from "./useAPI/useAPI";


function App() {
    const [papers, setPapers] = useState([])
    const [brands, setBrands] = useState([])
    const [bindingTypes, setBindingTypes] = useState([])
    const [paperTypes, setPaperTypes] = useState([])
    const [paperFormats, setPaperFormats] = useState([])
    const [countries, setCountries] = useState([])

    useEffect(() => {
        get(`${process.env.REACT_APP_API_HOST}/api/v1/papers`)
            .then(
                (response) => {
                    setPapers(response.data);
                })
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
            <Header/>
            <Papers
                papers={papers}
                brands={brands}
                bindingTypes={bindingTypes}
                paperTypes={paperTypes}
                countries={countries}
                paperFormats={paperFormats}
            />
        </Fragment>
    );
}

export default App;
