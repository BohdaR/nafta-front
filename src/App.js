import './styles/App.css';
import Header from "./components/Header";
import {Fragment, useEffect, useState} from "react";
import Papers from "./components/tables/Papers";
import {get} from "axios";

function App() {
    const [papers, setPapers] = useState([])
    const [brands, setBrands] = useState([])
    const [bindingTypes, setBindingTypes] = useState([])

    useEffect(() => {
        get(`${process.env.HOST}/offices`)
            .then(
                (response) => {
                    setOffices(response.data);
                })
    }, []);


    return (
        <Fragment>
            <Header/>
            <Papers papers={papers} brands={brands} bindingTypes={bindingTypes} />
        </Fragment>
    );
}

export default App;
