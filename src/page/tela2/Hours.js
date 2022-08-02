import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Hours({ days, session }) {
    return (
        <Section>
            <Timebox>
                <p>
                    {days.weekday} - {days.date}
                </p>

                <div>
                    {days.showtimes.map((data) => (
                        <Link to={`/seats/${data.id} `}>
                            <button>{data.name}</button>
                        </Link>
                    ))}
                </div>
            </Timebox>
            <Footer>
                <ul>
                    <li>
                        <img width={48} height={72} src={session.posterURL} />
                    </li>
                </ul>
                <strong>{session.title}</strong>
            </Footer>
        </Section>
    );
}

const Section = styled.section`
    display: flex;
    align-items: flex-start;

    width: 100%;
    height: 100%;

    p {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        letter-spacing: 0.02em;
        color: #293845;
    }

    button {
        width: 8.3rem;
        height: 4.3rem;
        background: #e8833a;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        color: #ffffff;
    }
`;

const Timebox = styled.div`
    padding-left: 2.4rem;
    display: flex;
    flex-direction: column;

    p {
        margin: 0 1rem 2.3rem 1rem;
    }

    button {
        margin: 0px auto 2.4rem 1rem;
    }
`;

const Footer = styled.footer`
    width: 100%;
    height: 11.7rem;
    display: flex;
    align-items: center;
    padding: 2.3rem;
    background: #dfe6ed;
    position: fixed;
    bottom: 0;
    border: 1px solid #9eadba;

    ul {
        margin-right: 1.4rem;
    }
    li {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 64px;
        height: 89px;
        background: #ffffff;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
    }

    strong {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        color: #293845;
    }
`;
