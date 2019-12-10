'use strict';
var hrs = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattle = {
  name: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSale: 6.3,
  // function that chooses a random number between the min and max customer
  custPerhour: function() {
    return Math.ceil(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
  },
  // function that outputs am average calulculated cookies sold every hour
  cookiesPerHour: function() {
    return this.custPerhour() * this.avgCookieSale;
  },
};
var tokyo = {
  name: 'Tokyo',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookieSale: 1.2,
  custPerhour: function() {
    return Math.ceil(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
  },
  cookiesPerHour: function() {
    return this.custPerhour() * this.avgCookieSale;
  },
};
var dubai = {
  name: 'Dubai',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookieSale: 3.7,
  custPerhour: function() {
    return Math.ceil(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
  },
  cookiesPerHour: function() {
    return this.custPerhour() * this.avgCookieSale;
  },
};
var paris = {
  name: 'Paris',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookieSale: 2.3,
  custPerhour: function() {
    return Math.ceil(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
  },
  cookiesPerHour: function() {
    return this.custPerhour() * this.avgCookieSale;
  },
};
var lima = {
  name: 'Lima',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookieSale: 4.6,
  custPerhour: function() {
    return Math.ceil(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
  },
  cookiesPerHour: function() {
    return this.custPerhour() * this.avgCookieSale;
  },
};
var cities = [seattle, tokyo, dubai, paris, lima];
var cityHolder = document.getElementById('city-holder');

for(var j = 0; j < cities.length; j++) {
  // assigns variable to <p> tag
  var newP = document.createElement('p');
  // insert city name in <p> content
  newP.textContent = cities[j].name;
  // append <p> with content to cityHolder
  cityHolder.appendChild(newP);
  // create loop that goes through each open hour of day
  for(var i = 6; i < 19; i++) {
  // time + cookies sold in that hour
  // create variable equal to each new line
    var newLi = document.createElement('li');
    // each line contecnt equal to hour of day and cookies sold in that hour
    newLi.textContent = `${hrs[i - 6]}: ${Math.ceil(cities[j].cookiesPerHour())}`;
    // append that content to city holder
    cityHolder.appendChild(newLi);
  }
}


