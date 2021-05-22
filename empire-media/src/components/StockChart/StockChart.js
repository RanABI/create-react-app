import React from 'react';
import StockChartStyled from './StockChartStyled';
import CandleStickStockScaleChartWithVolumeBarV3 from '../Charts/CandleStickStockScaleChartWithVolumeBarV3';
import {convertData} from '../../helpers/stockDataHelper'
import {CHART_TYPE} from '../../config/config';

export default function StockChart({props}){
    const {stockData, precision, chartType} = props;

    const getChart = (chartType) => {
        switch(chartType)
        {
            case CHART_TYPE.CandleStick:
                return <CandleStickStockScaleChartWithVolumeBarV3 type={'hybrid'} data={convertData(stockData, precision)} />;
        }
    }

    const hasData = stockData.length > 0;
    return (<StockChartStyled>
        
        { hasData && getChart(chartType)}
        { !hasData && <h1>No data</h1>}
    </StockChartStyled>);
}