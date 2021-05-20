import React from 'react';
import StockChartStyled from './StockChartStyled';

export default function StockChart({stockData}){
    console.log('stockData',stockData);

    return (<StockChartStyled>
        { stockData && stockData.map((data) => {
            console.log("---",data)
        })}
            
    </StockChartStyled>);
}