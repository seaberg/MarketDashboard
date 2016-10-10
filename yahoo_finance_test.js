var yahooFinance = require('./node_modules/yahoo-finance');

yahooFinance.historical({
  symbol: '^OMX',
  from: '2016-09-01',
  to: '2016-09-30'
}, function (err, quotes) {
   console.log(quotes);
});
