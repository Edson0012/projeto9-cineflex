import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Chairs from "./Chairs";
import Footer from "./Footer";
import Form from "./Form";

export default function Seats() {
    const [catalog, setCatalog] = useState(null);
    const [ab, setAb] = useState([]);
    const { idSeats } = useParams();

    useEffect(() => {
        const promise = axios.get(
            `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSeats}/seats`
        );

        promise.then((r) => {
            setCatalog(r.data);
        });
    }, []);

    return (
        <Main>
            <h2>Selecione o(s) assento(s)</h2>
            <Section>
                {catalog !== null ? (
                    catalog.seats.map((data) => (
                        <Chairs
                            seats={data}
                            value={data.id}
                            catalog={data.isAvailable}
                            setAb={setAb}
                        />
                    ))
                ) : (
                    <p> Carregando ...</p>
                )}
            </Section>
            <div className="button-request">
                <button className="selected"></button>
                <button className="available"></button>
                <button className="unavailable"></button>
            </div>
            <div className="name-button">
                <p>Selecionado</p>
                <p>Disponível</p>
                <p>Indisponivel</p>
            </div>
            <Form catalog={catalog} ab={ab} />
            <Footer catalog={catalog} />
        </Main>
    );
}

const Main = styled.main`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #ffffff;

    .display {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 5.7rem;
    }

    h2 {
        width: 100%;
        margin: 2rem auto;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #293845;
        margin-top: 3.3rem;
    }

    .button-request {
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .selected,
    .available,
    .unavailable {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 17px;
        margin-top: 2.4rem;
        cursor: pointer;
    }

    .selected {
        background: #8dd7cf;
        border: 1px solid #1aae9e;
    }

    .available {
        background: #c3cfd9;
        border: 1px solid #7b8b99;
    }

    .unavailable {
        background: #fbe192;
        border: 1px solid #f7c52b;
    }

    .name-button {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        margin-top: 1rem;
    }

    p {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;

        color: #4e5a65;
    }

    footer {
        width: 100%;
        height: 11.7rem;
        background: #dfe6ed;
        border: 1px solid #9eadba;

        position: fixed;
        bottom: 0;

        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 1.4rem 1rem;

        div {
            background: #ffffff;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
            border-radius: 2px;

            margin-right: 1.4rem;
            width: 6.4rem;
            height: 8.9rem;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                width: 4.8rem;
                height: 7.2rem;
            }
        }

        h3 {
            font-family: "Roboto";
            font-style: normal;
            font-weight: 400;
            font-size: 26px;
            line-height: 30px;
            display: flex;
            align-items: center;

            color: #293845;
            width: 28.7rem;
            height: 8.9rem;
        }
    }
`;

const Section = styled.section`
    width: 100%;
    height: 20.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.7rem;
    padding: 0rem 2.4rem;

    button {
        width: 2.6rem;
        height: 2.6rem;
        border-radius: 1.2rem;
        cursor: pointer;
        color: #000000;
    }

    .false {
        background-color: #fbe192;
        border-color: #f7c52b;
    }
`;
