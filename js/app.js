'use strict';
// hours of operation
var hrs = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var total = 0;
// Creates city objects
var seattle = new City('Seattle', 3, 18, 4.15);
var tokyo = new City('Tokyo', 3, 24, 1.2);
var dubai = new City('Dubai', 11, 38, 3.7);
var paris = new City('Paris', 20, 38, 2.3);
var lima = new City('Lima', 2, 16, 4.6);
var stores = [seattle, tokyo, dubai, paris, lima];

// Object constructor for cityies that take in arguments
function City(name, minCustomer, maxCustomer, avgCookieSale) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSale = avgCookieSale;
}
// method that chooses a random number between the min and max customer
City.prototype.getRandomCookieSale = function() {
  return Math.ceil(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
};
// method that outputs am average calulculated cookies sold every hour
City.prototype.cookiesSoldHr = function() {
  return Math.ceil(this.getRandomCookieSale() * this.avgCookieSale);
};

var tableHolder = document.getElementById('table-holder');

for(var i = 0; i < stores.length; i++) {
  var cityRow = document.createElement('tr');
  var cityData = document.createElement('td');
  cityData.textContent = stores[i].name;
  cityRow.appendChild(cityData);
  tableHolder.appendChild(cityRow);
  for(var j = 0; j < hrs.length; j++) {
    cityData = document.createElement('td');
    cityData.textContent = stores[i].cookiesSoldHr();
    cityRow.appendChild(cityData);
    tableHolder.appendChild(cityRow);
  }

}

// var cityCell = document.createElement('td');
// cityCell.textContent = stores[i].name;
// tableHolder.appendChild(cityCell);

// var cityHolder = document.getElementById('city-holder');

// for(var j = 0; j < cities.length; j++) {
//   var total = 0;
//   // assigns variable to <p> tag
//   var newP = document.createElement('p');
//   // insert city name in <p> content
//   newP.textContent = cities[j].name;
//   // append <p> with content to cityHolder
//   cityHolder.appendChild(newP);
//   // create loop that goes through each open hour of day
//   for(var i = 6; i < 19; i++) {
//   // time + cookies sold in that hour
//   // create variable equal to each new line
//     var newLi = document.createElement('li');
//     // each line contecnt equal to hour of day and cookies sold in that hour
//     newLi.textContent = `${hrs[i - 6]}: ${Math.ceil(cities[j].cookiesPerHour())}`;
//     // append that content to city holder
//     cityHolder.appendChild(newLi);
//     total += Math.ceil(cities[j].cookiesPerHour());
//   }
//   newLi.textContent = `Total: ${total}`;
//   cityHolder.appendChild(newLi);
// }

