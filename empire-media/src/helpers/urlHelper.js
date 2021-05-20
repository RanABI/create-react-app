import * as config from '../config/config';

export const getUrl = (stockType, period, precision) => {
    switch(stockType) {
        case config.STOCK_TYPE.Apple:{
            return `${config.chartsBaseUrl}${config.appleUrlSuffix(period, precision)}`;
        }
        default:
            return '';
    }
}