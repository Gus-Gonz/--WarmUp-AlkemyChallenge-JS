import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import DetailedTabPage from "./pages/DetailedTab";
import AddNewPage from "./pages/AddNew";

function App() {
    return (
        <Switch>
            <Route path="/detailedtab/:id" component={DetailedTabPage} />
            <Route path="/addnew" component={AddNewPage} />
            <Route path="/" exact component={HomePage} />
        </Switch>
    );
}

export default App;
