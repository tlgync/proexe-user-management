import { BrowserRouter } from 'react-router-dom';
// import { HeaderSide } from './Components/HeaderSide';
// import { UserDetail } from './Views/Dashboard/UserDetail';
import { LeftSideBar } from './components/LeftSideBar';

export const App = () => (
  <BrowserRouter>
    <div className="App">
      <LeftSideBar />
      {/* <Switch>
        <Route path="/user/:id" component={UserDetail} />
      </Switch> */}
    </div>

  </BrowserRouter>
);

export default App;
