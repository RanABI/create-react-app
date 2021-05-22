import {getUrl} from '../helpers/urlHelper'
import { headers} from '../config/config'

export default function getStockData (data) {

    const {stockType, precision, period, onSuccess, onFailure,} = data;
    const url = getUrl(stockType.stockType, period, precision);

    const response = fetch(url,{ headers })
        .then(response => response.json())
        .then(data => {console.log('fetched');onSuccess(data);})
        .catch((error) => onFailure(error));

}