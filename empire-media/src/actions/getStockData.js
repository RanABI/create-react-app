import {getUrl} from '../helpers/urlHelper'
import { headers} from '../config/config'

export default function getStockData (data) {

    const {stockType, precision, period, onSuccess, onFailure,} = data;
    const url = getUrl(stockType.stockType, period, precision);
    
    fetch(url,{ headers })
        .then(response => response.json())
        .then(data => onSuccess(data))
        .catch((error) => onFailure(error));

}