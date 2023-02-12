import styled from 'styled-components';

export const EyeColor = styled.div<{eyeColor: string}>`
    padding: 10px;
    border-radius: 50%;
    width: 0;
    height: 0;
    background-color: ${({ eyeColor }) => eyeColor};
`;