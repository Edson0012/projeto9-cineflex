import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Success() {
    const navigate = useNavigate();

    const {
        state: { catalog, name, cpf, ab },
    } = useLocation();

    console.log(ab);

    const id = catalog.seats
        .filter((r) => ab.includes(r.id))
        .map((r) => r.name);

    return (
        <Main>
            <div className="request">
                <h2>
                    Pedido feito
                    <br />
                    com sucesso!
                </h2>
            </div>
            <section>
                <div className="session-success">
                    <h3>Filme e sessão</h3>
                    <p>
                        {catalog.movie.title}
                        <br />
                        {catalog.day.date} - {catalog.name}
                    </p>
                </div>
                <div>
                    <h3>Ingressos</h3>
                    {id.map((res) => {
                        return <p>Assento {res}</p>;
                    })}
                    <br />;
                </div>
                <div className="buyer">
                    <h3>Comprador</h3>
                    <p>
                        Nome: {name}
                        <br />
                        CPF: {cpf}
                    </p>
                </div>

                <footer>
                    <button onClick={() => navigate("/")}>
                        Voltar pra Home
                    </button>
                </footer>
            </section>
        </Main>
    );
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    font-family: "Roboto";
    width: 100%;
    height: 81rem;

    h2 {
        color: rgba(36, 122, 107, 1);
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;

        margin: 2rem auto 4rem auto;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        div {
            width: 37.4rem;
            padding-left: 2.4rem;
        }

        .buyer {
            margin-bottom: 10rem;
        }

        h3 {
            font-weight: 700;
            font-size: 24px;
            line-height: 28px;
            display: flex;
            align-items: center;
            letter-spacing: 0.04em;

            color: #293845;
        }

        p {
            font-weight: 400;
            font-size: 22px;
            line-height: 26px;
            color: #293845;
        }
    }

    footer {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;

        button {
            background: #e8833a;
            border-radius: 3px;
            border: none;
            color: #ffffff;
            width: 225px;
            height: 42px;
            cursor: pointer;

            font-weight: 400;
            font-size: 18px;
            line-height: 21px;
        }
    }
`;
