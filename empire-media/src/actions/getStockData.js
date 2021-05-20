import {getUrl} from '../helpers/urlHelper'
import { headers} from '../config/config'

export default function getStockData (data) {

    const {stockType, precision, period, onSuccess, onFailure,} = data;
    
    const url = getUrl(stockType.stockType, period, precision);
    console.log('url',url);
    
    
    const response = fetch(url,{ headers })
        .then(response => response.json())
        .then(data => {onSuccess(data);console.log('SUCCESS');})
        .catch((error) => onFailure(error));

}