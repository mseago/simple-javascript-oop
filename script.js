'use strict';

function Car(make, model) {
  this.make = make;
  this.model = model;
  this.passengers = [];
}
Car.prototype = {
  honk: function() {
    return 'beep beep';
  },
  addPassenger: function(passenger) {
    this.passengers.push(passenger);
  },
  description: function() {
    return 'This is a ' + this.make + ' ' + this.model;
  },
  passengerList: function() {
    var self = this;
    if (this.passengers.length === 0) {
      return 'no passengers';
  } else if (this.passengers.length === 1) {
      return this.passengers[0];
  } else if (this.passengers.length > 2) {
    var allPassengers = '';
    self.passengers.forEach(function(passenger, idx) {
      if (idx === self.passengers.length - 1) {
        allPassengers += 'and ' + passenger;
      } else {
        allPassengers += passenger + ', ';
      }
    });
    return allPassengers;
    }
  }

}

function ChevyCar(){}
ChevyCar.prototype = new Car();
ChevyCar.prototype.breakDown = function(){}
ChevyCar.prototype.honk = function() {
  return 'boop boop';
}
