import React, {Fragment} from 'react';
import LinearIndeterminate from "./Loader";

const Header = ({showLoader}) => {
    return (
        <Fragment>

            <header className="topNav">

                <div className="container">
                    <div className="headerNav con">
                        <div className="topNavLeft">
                            <a href="/">Papers</a>
                            <a href="/brands">Brands</a>
                            <a href="/countries">Countries</a>
                            <a href="/paper_formats">Paper Formats</a>
                            <a href="/paper_types">Paper Types</a>
                            <a href="/binding_types">Binding Types</a>
                        </div>
                        <div className="topNavRight">
                            <a href="/user/edit">Bohdan Shushval</a>
                            <a href="/user/sign_out">Logout</a>
                        </div>
                    </div>
                </div>
            </header>
            {showLoader ?
            <LinearIndeterminate/> : null}
        </Fragment>
    );
};

export default Header;
