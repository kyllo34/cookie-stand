'use strict';
// hours of operation
var hrs = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var allStores = [];

var stores = [seattle, tokyo, dubai, paris, lima];

// Object constructor for cityies that take in arguments
function City(name, minCustomer, maxCustomer, avgCookieSale) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSale = avgCookieSale;
  this.hrlyArray = [];
  allStores.push(this);
}
// Creates city objects
var seattle = new City('Seattle', 3, 18, 4.15);
var tokyo = new City('Tokyo', 3, 24, 1.2);
var dubai = new City('Dubai', 11, 38, 3.7);
var paris = new City('Paris', 20, 38, 2.3);
var lima = new City('Lima', 2, 16, 4.6);
// method that chooses a random number between the min and max customer
City.prototype.getRandomCookieSale = function() {
  return Math.ceil(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
};
// method that outputs am average calulculated cookies sold every hour
City.prototype.cookiesSoldHr = function() {
  return Math.ceil(this.getRandomCookieSale() * this.avgCookieSale);
};

// Stores cookies sold each hour for each city in an array
for (var i = 0; i < hrs.length; i++) {
  for (var j = 0; j < allStores.length; j++) {
    allStores[j].hrlyArray[i] = allStores[j].cookiesSoldHr();
  }
}
// Creates array that contains total cookies for all cities per hour
function hrlyTotalFunction() {
  var hrlyTotalArray = [];
  for (j = 0; j < hrs.length; j++) {
    var hrlyTotal = 0;
    for (i = 0; i < allStores.length; i++){
      hrlyTotal += allStores[i].hrlyArray[j];
    }
    hrlyTotalArray.push(hrlyTotal);
  }
  return hrlyTotalArray;
}
// Creates a method that renders the table
var tableHolder = document.getElementById('table-holder');
City.prototype.render = function() {
  var dailyTotal = 0;
  var cityRow = document.createElement('tr');
  var cityData = document.createElement('td');
  cityData.textContent = this.name;
  cityRow.appendChild(cityData);
  tableHolder.appendChild(cityRow);
  for (var j = 0; j < hrs.length; j++) {
    cityData = document.createElement('td');
    cityData.textContent = this.hrlyArray[j];
    cityRow.appendChild(cityData);
    tableHolder.appendChild(cityRow);
    dailyTotal += this.hrlyArray[j];
  }
  cityData = document.createElement('td');
  cityData.textContent = dailyTotal;
  cityRow.appendChild(cityData);
  tableHolder.appendChild(cityRow);
};

function lastRow() {
  var hrlyTotalVariable = hrlyTotalFunction();
  var cityRow = document.createElement('tr');
  var cityData = document.createElement('td');
  cityData.textContent = 'Totals';
  cityRow.appendChild(cityData);
  tableHolder.appendChild(cityRow);
  for (i = 0; i < hrlyTotalVariable.length; i++) {
    cityData = document.createElement('td');
    cityData.textContent = hrlyTotalVariable[i];
    cityRow.appendChild(cityData);
    tableHolder.appendChild(cityRow);
  }
}

// renders all city objects
for (i = 0; i < allStores.length; i ++){
  allStores[i].render();
}
lastRow();





