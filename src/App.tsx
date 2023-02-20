import { Row, Col, Layout } from 'antd';
import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { NotFound } from '@components/pages/not-found/not-found';
import { AppHeader } from '@components/app-header/app-header';

const Characters = lazy(() => import('@components/pages/characters/characters').
  then(({ Characters }) => ({ default: Characters })));
const Character = lazy(() => import('@components/pages/character/character').
  then(({ Character }) => ({ default: Character })));

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
