import { Layout, Typography } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Header } = Layout;
const { Title, Text } = Typography;

export const HeaderContainer = styled(Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Brand = styled(Title)`
    &.ant-typography {
        color: white;
    }
`;

export const LangIcon = styled(GlobalOutlined)`
    color: white;
    margin-right: 4px;
`;

export const LangButton = styled.button`
    display: flex;
    background-color: transparent;
    border: 0;
    align-items: center;
`;

export const LangText = styled(Text)`
    color: white;
`;
