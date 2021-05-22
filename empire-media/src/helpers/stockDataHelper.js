import * as config from '../config/config'

export const convertData = (data, period, precision) => {
    var keys = ["date","open","close","high","low","volume"],
        i = 0, k = 0,
        obj = null,
        output = [];
    for (i = 0; i < data.length; i++) {
        obj = {};
        if(period === config.PERIODS.One_Week)
        {
            obj[keys[0]] = new Date(data[i].StartDate); 
        }
        else{
            obj[keys[0]] = new Date(data[i].StartTime);
        }

        for (k = 1; k < keys.length; k++) {
            switch(keys[k])
            {
                case "open":
                {
                    obj[keys[k]] = data[i].Open;
                    break;
                }
                case "close":
                {
                    obj[keys[k]] = data[i].Close;
                    break;
                }
                case "high":
                {
                    obj[keys[k]] = data[i].High;
                    break;
                }
                case "low":
                {
                    obj[keys[k]] = data[i].Low;
                    break;
                }
                case "volume":
                {
                    obj[keys[k]] = data[i].Volume;
                    break;
                }
            }
           
        }
    output.push(obj);
    }
    return output;
}