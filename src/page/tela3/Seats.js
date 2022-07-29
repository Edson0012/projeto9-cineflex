import styled from "styled-components";
import axios from "axios";

export default function Seats() {
    return (
        <Main>
            <h2>Selecione os assentos</h2>
            <section>
                <button>01</button>
            </section>
            <div></div>
            <form></form>
        </Main>
    );
}

const Main = styled.main`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2.4rem;

    h2 {
        width: 100%;
        margin: 6rem auto;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    section {
        background-color: blue;
        width: 100%;

        button {
            width: 2.6rem;
            height: 2.6rem;
            background: #c3cfd9;
            border: 1px solid #808f9d;
            border-radius: 1.2rem;
        }
    }
`;
