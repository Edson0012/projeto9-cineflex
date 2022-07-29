import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Main() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const promise = axios.get(
            "https://mock-api.driven.com.br/api/v7/cineflex/movies"
        );

        promise.then((r) => {
            setMovie(r.data);
        });
    }, []);

    return (
        <Section>
            <h2>Selecione o filme</h2>
            <ul>
                {movie.map((r, index) => (
                    <Link to={`/session/${r.id}`}>
                        <li>
                            <img src={r.posterURL} key={index} />
                        </li>
                    </Link>
                ))}
            </ul>
        </Section>
    );
}

const Section = styled.main`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;

    h2 {
        color: #293845;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;

        width: 100%;
        height: 11rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 12.9rem;
        height: 19.3rem;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        padding: 3rem;
    }

    li {
        width: 14.5rem;
        height: 20.9rem;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        margin-top: 1.1rem;
    }
`;
