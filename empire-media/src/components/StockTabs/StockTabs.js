import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import * as config from '../../config/config'
import StockTabsStyled from './StockTabsStyled';
import 'react-tabs/style/react-tabs.css';


export default function StockTabs({props}) {
    
    const { setPeriod, setPrecision} = props;
    
    const handleClick = (period, precision) => {
    
        setPeriod(period);
        setPrecision(precision);
    }

    return (<StockTabsStyled>
        <Tabs defaultIndex={3}>
            <TabList>
                <Tab onClick={() => handleClick(config.PERIODS.Minute, config.PRECISION.Minutes)}>1M</Tab>
                <Tab onClick={() => handleClick(config.PERIODS.Five_Minutes, config.PRECISION.Minutes)}>5M</Tab>
                <Tab onClick={() => handleClick(config.PERIODS.One_Hour, config.PRECISION.Hours)}>1H</Tab>
                <Tab onClick={() => handleClick(config.PERIODS.One_Week, config.PRECISION.Hours)}>1W</Tab>
            </TabList>

            <TabPanel >
            </TabPanel>
            <TabPanel >
            </TabPanel>
            <TabPanel >
            </TabPanel>
            <TabPanel >
            </TabPanel>
        </Tabs>
    </StockTabsStyled>);
}