import AppHeader from "./compnents/AppHeader";
import {CssBaseline} from "@material-ui/core";
import ContentRoot from "./compnents/ContentRoot";

function App() {
    return (
        <div className="App">
            <CssBaseline/>
            <AppHeader/>
            <ContentRoot/>
        </div>
    );
}

export default App;
