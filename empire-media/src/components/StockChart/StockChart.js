import React from 'react';
import StockChartStyled from './StockChartStyled';
import CandleStickStockScaleChartWithVolumeBarV3 from '../Charts/CandleStickStockScaleChartWithVolumeBarV3';
import {convertData} from '../../helpers/stockDataHelper'

export default function StockChart({props}){
    const {stockData, precision} = props;
    
    return (<StockChartStyled>
        {stockData && stockData.length > 0 &&  
            <CandleStickStockScaleChartWithVolumeBarV3 type={'svg'} data={convertData(stockData, precision)} />
        }
    </StockChartStyled>);
}