import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import {Characters} from './components/characters/characters';
import {NotFound} from './components/not-found/not-found';
import {Character} from './components/character/character';
import { Row, Col, Typography, Layout} from 'antd';
import { RootProvider } from '@providers';
const {Header, Content } = Layout;
const { Title } = Typography;

function App() {
  return (
    <RootProvider>
      <BrowserRouter>
        <Layout>
          <Header className="header">
            <Title id={'brand'} level={2}>
                Test Assignment
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
      </BrowserRouter>
    </RootProvider>
  );
}

export default App;
