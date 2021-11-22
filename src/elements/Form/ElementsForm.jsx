import styled from "styled-components";

// const colors = {
//     border: '#4c0404',
//     error: '#bb2929',
//     success: '#1ed12d'
// }

const Formulario = styled.form`
    display: grid;
    grid-template-columns: 1fr, 1fr;
    gap: 2rem;

    @media (max-width: 80rem) {
    }
`;

export { Formulario };
