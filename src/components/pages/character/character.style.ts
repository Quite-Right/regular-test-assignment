import { LoadingOutlined } from '@ant-design/icons';
import styled from 'styled-components';

export const FullPageLoader = styled(LoadingOutlined)`
    position: absolute;
    width: 40px;
    height: 40px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;