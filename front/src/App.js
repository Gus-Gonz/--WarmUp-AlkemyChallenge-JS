import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/Home";
import DetailedTabPage from "./pages/DetailedTab";

function App() {
  return (
    <Switch>
      <Route path="/detailedtab/:id" component={DetailedTabPage} />
      <Route path="/" exact component={HomePage} />
    </Switch>
  );
}

export default App;
