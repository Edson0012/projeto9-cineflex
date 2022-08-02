import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Forms({ ab, catalog }) {
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        axios
            .post(
                "https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many",
                {
                    ids: ab,
                    name: name,
                    cpf: cpf,
                }
            )
            .then((res) => {
                console.log(res);
                navigate("/success", { state: { catalog, name, cpf, ab } });
            });
    }

    return (
        <Form onSubmit={handleSubmit}>
            <div>
                <p>Nome do comprador:</p>
                <input
                    value={name}
                    placeholder="Digite seu nome..."
                    onChange={(e) => setName(e.target.value)}
                ></input>
            </div>
            <div>
                <p>CPF do comprador:</p>
                <input
                    value={cpf}
                    placeholder="Digite seu CPF..."
                    onChange={(e) => setCpf(e.target.value)}
                ></input>
            </div>
            <div className="display" width="100%">
                <button type="submit">Reservar assento(s)</button>
            </div>
        </Form>
    );
}

const Form = styled.form`
    display: flex;
    flex-direction: column;

    margin-top: 4.2rem;
    margin-bottom: 3rem;
    gap: 1rem;
    font-family: "Roboto";

    p {
        font-weight: 400;
        font-size: 1.8rem;
        line-height: 2.1rem;

        color: #293845;
    }

    input {
        width: 32.7rem;
        height: 5.1rem;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        padding: 1.8rem;
        color: #293845;

        ::placeholder {
            font-style: italic;
            color: #afafaf;
        }
    }

    button {
        width: 22.5rem;
        height: 4.2rem;

        background: #e8833a;
        border-radius: 3px;
        color: #ffffff;
        border: none;
    }
`;
