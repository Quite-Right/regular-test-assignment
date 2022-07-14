import './App.css';
import 'antd/dist/antd.css';
import {
    BrowserRouter,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import {Provider} from "react-redux";
import {Characters} from "./components/characters/characters";
import {NotFound} from "./components/not-found/not-found";
import {Character} from "./components/character/character";
import {Row, Col, Layout, Typography} from 'antd';
import store from "./redux/store";

const { Header } = Layout;
const { Title } = Typography;

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
            <Header className={'header'}>
                <Title id={'brand'} level={2}>
                    Test Assignment
                </Title>
            </Header>
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
        </BrowserRouter>
      </Provider>
  );
}

export default App;
