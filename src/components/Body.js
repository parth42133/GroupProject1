// Done by Nikita Vyas

import React from "react";
import Header from "./Header";

import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const Body = () => {
    return (
        <>
            <Header />
            <div className="parent-wrap py-3 h-530">
                <Container>
                    <Outlet />
                </Container>
            </div>
            
        </>
    );
};

export default Body;
