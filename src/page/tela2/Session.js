import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Hours from "./Hours";

export default function Session() {
    const [session, setSession] = useState(null);
    const { idMovies } = useParams();

    useEffect(() => {
        const promise = axios.get(
            `https://mock-api.driven.com.br/api/v7/cineflex/movies/${idMovies}/showtimes`
        );

        promise.then((r) => {
            setSession(r.data);
        });
    }, []);

    console.log(session);
    return (
        <Main>
            <h2>Selecione o horário</h2>
            {session !== null ? (
                session.days.map((data) => (
                    <Hours days={data} session={session} />
                ))
            ) : (
                <p>Carregando...</p>
            )}
        </Main>
    );
}

const Main = styled.main`
    width: 100%;
    background-color: #e5e5e5;
    display: flex;
    align-items: center;
    flex-direction: column;

    h2 {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        color: #293845;

        width: 100%;
        height: 11rem;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
