var numStocks = 100;
var stocks = [];

var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

for (i=0; i<=15; i++) {
   var stock = new Object();
   stock.name = 'id_'+i;
  
  stock.value = [Math.round(Math.random()*100000)/100];
  stock.change = [(Math.random()*0.2)-0.1];
  
  if(stock.change[0] >= 0) {
  $('table tbody').append('<tr class="stock increase"><td class="name">'+stock.name+'</td><td class="value">'+stock.value+'</td><td class="change">'+(stock.change[0]*stock.value).toFixed(2)+'</td><td class="percentage">'+(stock.change[0]*100).toFixed(2)+'%</td></tr>');
  } else {
    $('table tbody').append('<tr class="stock decrease"><td class="name">'+stock.name+'</td><td class="value">'+stock.value+'</td><td class="change">'+(stock.change[0]*stock.value).toFixed(2)+'</td><td class="percentage">'+(stock.change[0]*100).toFixed(2)+'%</td></tr>');
  }
  
  stocks.push(stock);
}

console.log(stocks[50].name);