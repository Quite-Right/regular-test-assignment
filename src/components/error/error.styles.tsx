import styled from 'styled-components';
import { ReloadOutlined } from '@ant-design/icons';

export const ErrorContainer = styled.div``;

export const ErrorHeader = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 200px;
`;

export const ErrorMessage = styled.div`
    max-width: 160px;
`;
export const ErrorDescription = styled.div`
    margin-top: 8px;
`;
export const ReloadButton = styled(ReloadOutlined)`
    margin-left: 20px;
`;
