import AppHeader from "./compnents/AppHeader";
import {CssBaseline} from "@material-ui/core";
import ContentRoot from "./compnents/ContentRoot";
import React, {useCallback} from "react";

function App() {

    const [tabIndex, setTabIndex] = React.useState(0);
    const onTabChange = useCallback((index) => {
        setTabIndex(index);
    }, [])

    return (
        <div className="App">
            <CssBaseline/>
            <AppHeader onTabChange={onTabChange}/>
            <ContentRoot selectedTab={tabIndex}/>
        </div>
    );
}

export default App;
