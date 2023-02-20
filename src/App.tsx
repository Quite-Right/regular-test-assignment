import { Row, Col, Layout } from 'antd';
import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { NotFound } from '@components/pages/not-found/not-found';
import { AppHeader } from '@components/app-header/app-header';
import { BASE_ROUTE, CHARACTERS_ROUTE, CHARACTER_ROUTE } from '@constants';

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
              <Route path={BASE_ROUTE} element={<Navigate to={CHARACTERS_ROUTE} />} />
              <Route path={CHARACTERS_ROUTE}>
                <Route index element={
                  <Suspense fallback="Page Loading">
                    <Characters />
                  </Suspense>
                } />
                <Route path={CHARACTER_ROUTE} element={
                  <Suspense fallback="Page Loading">
                    <Character />
                  </Suspense>
                }/>
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
