
export const headers = { 'Content-Type': 'application/json' };

export const chartsBaseUrl = "https://www.fxempire.com/api/v1/en/stocks/chart/candles?Identifier=";
export const appleUrlSuffix = (period,precision) =>  `AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=${period}&Precision=${precision}&StartTime=8/28/2020%2016:0&EndTime=9/4/2020%2023:59&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume`;

export const STOCK_TYPE = {
    'Apple' : 1
};

export const PERIOD = {
    'Minute' : 1,
    'Five_Minutes' : 5,
    'One_Hour' : 1,
    'One_Week' : 168
};

export const PRECISION = {
    'Minutes' : 'Minutes',
    'Hours' : 'Hours'
}

export const CHART_TYPE = {
    'CandleStick' : 1
}