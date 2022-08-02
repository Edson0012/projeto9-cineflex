import { useState } from "react";
import styled from "styled-components";

export default function Chairs({ catalog, seats, setAb, value }) {
    const [select, setSelect] = useState(false);

    function selectedChairs() {
        setSelect(!select);
        setAb((r) => {
            const selected = r.filter((data) => data !== value);
            console.log(selected);
            if (selected.length === r.length) {
                return [...r, value];
            } else {
                return selected;
            }
        });
    }

    return (
        <>
            <Button
                className={`${catalog}`}
                onClick={() => {
                    selectedChairs();
                }}
                disabled={!catalog}
                select={select}
            >
                {seats.name}
            </Button>
        </>
    );
}

const Button = styled.button`
    background: ${({ select }) => (select ? "#8DD7CF" : "#C3CFD9")};
    border: 1px solid ${({ select }) => (select ? "#45BDB0" : "#808F9D")};
`;
