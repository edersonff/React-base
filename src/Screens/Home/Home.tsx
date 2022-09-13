import React from 'react';
import FullPage from '../../Components/FullPage/FullPage';
import HalfPage from '../../Components/HalfPage/HalfPage';

function Home({}) {
    return (
        <>
            <HalfPage>
                <h1>Bem vindo</h1>
            </HalfPage>
            <HalfPage>
                <h1>Bem vindo</h1>
            </HalfPage>
            <FullPage>
                <h1>Bem vindo</h1>
            </FullPage>
        </>
    );
}

export default Home;