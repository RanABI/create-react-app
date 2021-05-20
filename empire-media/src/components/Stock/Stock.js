import React, {useEffect, useState} from 'react';
import getStockData from '../../actions/getStockData';
import StockStyled from './StockStyled';
import StockChart from '../StockChart/StockChart';
import StockTabs from '../StockTabs/StockTabs';
import * as config from '../../config/config'
export default function Stock(stockType) {

    const [stockData,setStockData] = useState([]);
    const [precision, setPrecision] = useState(config.PRECISION.Minutes);
    const [period, setPeriod] = useState(config.PERIODS.Minute);
    
    const onFailure = (error) => {
        console.log('error',error);
    }
    useEffect(() => {
        getStockData({
            stockType: stockType,
            precision: precision, 
            period: period, 
            onSuccess: setStockData,
            onFailure: onFailure
        } );
    }, [period,precision]);
    console.log('stockData',stockData)
    return ( 
        <StockStyled>
            <StockTabs props= {{setPeriod, setPrecision}}/>
            <StockChart stockData={stockData}/>
        </StockStyled>        
    );
}