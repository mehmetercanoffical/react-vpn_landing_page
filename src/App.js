import './App.css';
import { BrowserRouter as Router, Route, Switch }
  from "react-router-dom"
import styled from "styled-components"
import Header from "./component/Header"
import Chat from './component/Chat';
import Login from './component/Login';
import Sidebar from './component/Sidebar';

function App() {
  return (
    <Router>
      <div className="App">
        <Container>
          <Header />
          <Main>
            <Sidebar/>
            <Switch>
              <Route path="/">
                <Chat />
              </Route>
              <Route path="/loginPage">
                <Login />
              </Route>
            </Switch>
          </Main>
        </Container>
      </div>
    </Router>

  );


}

export default App;

const Container = styled.div`
  width:100%;
  height:100vh;
  display:grid;
  grid-template-rows:38px auto;
  
`;
const Main = styled.div`
  display:grid;
  grid-template-columns:260px auto;
`;
