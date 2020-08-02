import React from 'react';
import styled, { css } from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color: #141414;
    color: #ffffff;
    flex: 1;
    padding-top: 25px;
    padding-left: 5%;
    padding-right: 5%;
    ${({paddingAll}) => css`
        padding: ${paddingAll};
    `}

`;

function PageDefault({ children, paddingAll, buttonPage, link }){
    return (
        <>

            <Menu text={buttonPage} route={link}/>
                <Main paddingAll={paddingAll}>
                    {children}
                </Main>
            <Footer/>

        </>

    )
}

export default PageDefault;