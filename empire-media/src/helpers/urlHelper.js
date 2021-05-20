import * as config from '../config/config';

export const getUrl = (stockType, period, precision) => {
    switch(stockType) {
        case config.STOCK_TYPE.Apple:{
            console.log('hhere')
            const prefix = `${config.chartsBaseUrl}`;
            const suffix = `${config.appleUrlSuffix(period, precision)}`;

            console.log('suffix',suffix)
            return '';
        }
        default:
            return '';
    }
}