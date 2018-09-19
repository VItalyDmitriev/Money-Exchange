// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var money = {'H':50,'Q':25,'D':10,'N':5,'P':1};
    var remainder = currency;
    var result = {};
    if(currency <= 0){
       return result;
    }
    else if(currency > 10000){
        result['error'] = "You are rich, my friend! We don\'t have so much coins for exchange"
        return result;
    }
    else{
        for(var key in money) {
            var match = remainder/money[key];
            match = Math.floor(match);
            if(match !== 0){
                var remainder = remainder - match*money[key];
                result[key] = match;
            }
        }
        return result;
    }
    
}
