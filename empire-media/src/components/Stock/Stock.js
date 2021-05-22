import React, {useEffect, useState} from 'react';
import getStockData from '../../actions/getStockData';
import StockStyled from './StockStyled';
import StockChart from '../StockChart/StockChart';
import StockTabs from '../StockTabs/StockTabs';
import * as config from '../../config/config'

export default function Stock(stockType) {
    const [stockData, setStockData] = useState([]);
    const [precision, setPrecision] = useState(config.PRECISION.Minutes);
    const [period, setPeriod] = useState(config.PERIOD.Minute);
    
    const onFailure = (_) => {
        setStockData([]);
    }
    
    useEffect(() => {
        getStockData({
            stockType: stockType,
            precision: precision, 
            period: period, 
            onSuccess: setStockData,
            onFailure: onFailure
        } );
    }, [period,precision,stockType]);

    const data = {stockData, precision,'chartType': config.CHART_TYPE.CandleStick };
    return ( 
        <StockStyled>
            <StockTabs props={{setPeriod, setPrecision}}/>
            <StockChart props={data}/>
        </StockStyled>        
    );
}