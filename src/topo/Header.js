import styled from "styled-components";

export default function Top() {
    return (
        <Header>
            <h1>CINEFLEX</h1>
        </Header>
    );
}

const Header = styled.header`
    font-family: "Roboto", sans-serif;
    background-color: #c3cfd9;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 6.7rem;

    h1 {
        color: #e8833a;
        font-style: normal;
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
    }
`;
