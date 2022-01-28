import React, {useState} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function Menubar(props) {

    const [value, setValue] = useState(0);

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `menubar-tabpanel-${index}`,
        };
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
        props.onTabChange(newValue);
    };

    return (
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Stasjoner" {...a11yProps(0)} />
            <Tab label="Søk i listen" {...a11yProps(1)} />
        </Tabs>
    );
}

export default Menubar