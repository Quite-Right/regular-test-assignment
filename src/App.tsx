import { Route, Routes, Navigate } from 'react-router-dom';
import { Row, Col, Typography, Layout } from 'antd';
import { RootProvider } from '@providers';
import { Characters } from '@components/pages/characters/characters';
import { NotFound } from '@components/not-found/not-found';
import { Character } from '@components/pages/character/character';
import './App.css';

const { Header, Content } = Layout;
const { Title } = Typography;

const App = () => {
  return (
    <RootProvider>
      <Layout>
        <Header className="header">
          <Title id={'brand'} level={2}>
                Test аssignment
          </Title>
        </Header>
        <Content>
          <Row gutter={16} justify="center" className="main">
            <Col span={22}>
              <Routes>
                <Route path="/" element={<Navigate to="/characters" />} />
                <Route path="/characters">
                  <Route index element={<Characters />} />
                  <Route path=":characterId" element={<Character />} />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Col>
          </Row>
        </Content>
      </Layout>
    </RootProvider>
  );
};

export default App;
