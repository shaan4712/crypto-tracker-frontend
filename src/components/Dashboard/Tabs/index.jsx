import React from 'react';
// import {Tab} from '@mui/material';
// import {TabContext, TabList, TabPanel} from '@mui/lab';
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./styles.css";

export default function TabsComponent({ coins }) {
  const [value, setValue] = React.useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    "& .Mui-selected": {
      color: "var(--blue) !important",
    },
    fontFamily: "Inter,sans-serif",
    fontWeight: 600,
    textTransform: "capitalize",
  };

  return (
    <div>
      <TabContext value={value}>
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="grid" sx={style}/>
            <Tab label="List" value="list" sx={style}/>
          </TabList>

        <TabPanel value="grid">
          <div>
            {coins.map((item, i) => {
              return (
                <div>
                  <img src={item.image} />  
                  <p key={i}>
                    {i+1}. {item.name}
                  </p>
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel value="list">Item Two</TabPanel>
      </TabContext>
    </div>
  );
}
