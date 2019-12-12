'use strict';
// hours of operation
var hrs = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
// creates an array that will contain all city objects
var allStores = [];
// Object constructor for cityies that take in arguments
// hrlyArray will store the hourly sales totals
function City(name, minCustomer, maxCustomer, avgCookieSale) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSale = avgCookieSale;
  this.hrlyArray = [];
  allStores.push(this);
}
// Creates city objects from city contructor
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
City.prototype.randomHrlyArray = function() {
  for (var j = 0; j < hrs.length; j++) {
    this.hrlyArray[j] = this.cookiesSoldHr();
  }
  return this.hrlyArray;
};

// Creates array that contains total cookies for all cities per hour
var hrlyTotalArray = [];
function hrlyTotalFunction() {
  var grandTotal = 0;
  for (var j = 0; j < hrs.length; j++) {
    var hrlyTotal = 0;
    for (var i = 0; i < allStores.length; i++){
      hrlyTotal = hrlyTotal + allStores[i].hrlyArray[j];
    }
    hrlyTotalArray.push(hrlyTotal);
    grandTotal += hrlyTotalArray[j];
  }
  hrlyTotalArray.push(grandTotal);
}
hrlyTotalFunction();
// Assigns variable to table
var tableHolder = document.getElementById('table-holder');

// creates first row
function firstRow() {
  var cityRow = document.createElement('tr');
  var cityData = document.createElement('td');
  cityData.textContent = null; // Delete this later
  cityRow.appendChild(cityData);
  tableHolder.appendChild(cityRow);
  for (var i = 0; i < hrs.length; i ++) {
    cityData = document.createElement('td');
    cityData.textContent = hrs[i];
    cityRow.appendChild(cityData);
    tableHolder.appendChild(cityRow);
  }
  cityData = document.createElement('td');
  cityData.textContent = 'Daily Location Total';
  cityRow.appendChild(cityData);
  tableHolder.appendChild(cityRow);
}
// Creates a method that renders the table
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

// function that renders the last row
function lastRow() {
  var cityRow = document.createElement('tr');
  var cityData = document.createElement('td');
  cityData.textContent = 'Totals';
  cityRow.appendChild(cityData);
  tableHolder.appendChild(cityRow);
  for (var i = 0; i < hrlyTotalArray.length; i++) {
    cityData = document.createElement('td');
    cityData.textContent = hrlyTotalArray[i];
    cityRow.appendChild(cityData);
    tableHolder.appendChild(cityRow);
  }
}

// renders first row
firstRow();

// renders table for the first time with original locations
renderTable();

// renders all city table
function renderTable() {
  for (var i = 0; i < allStores.length; i++){
    allStores[i].randomHrlyArray();
    allStores[i].render();
  }
}

// takes in event parameter to prevent the default
function formSubmitted(event){
// creates a new city based on customer input
  var newCity = new City (document.getElementById('city-name').value, parseInt(document.getElementById('minimum-customers-per-hour').value), parseInt(document.getElementById('maximum-number-of-customers-per-hour').value), parseInt(document.getElementById('the-average-number-of-cookies-purchased-per-customer').value));
  newCity.randomHrlyArray();
  console.log(newCity);
  event.preventDefault();
}

// renders last row
lastRow();




// creates a listener
var formlistener = document.getElementById('new-location');
formlistener.addEventListener('submit',formSubmitted);




