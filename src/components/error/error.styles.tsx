import styled from 'styled-components';
import { ReloadOutlined } from '@ant-design/icons';

export const ErrorContainer = styled.div`
    display: flex;
`;

export const ErrorHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ErrorMessage = styled.div``;
export const ErrorDescription = styled.div``;
export const ReloadButton = styled(ReloadOutlined)`
    margin-left: 20px;
`;
