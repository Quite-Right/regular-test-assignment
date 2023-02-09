import { Row, Col, Layout } from 'antd';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Characters } from '@components/pages/characters/characters';
import { NotFound } from '@components/pages/not-found/not-found';
import { Character } from '@components/pages/character/character';
import { AppHeader } from '@components/app-header/app-header';

const { Content } = Layout;

const App = () => {    
  return (
    <Layout>
      <AppHeader/>
      <Content>
        <Row gutter={16} justify="center">
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
  );
};

export default App;
