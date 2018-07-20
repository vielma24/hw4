(function(window) {
  'use strict';
  var FORM_SELECTOR = '[coffee-payment="form"]';
  var SERVER_URL = 'http://localhost:2403/coffeeorders';
  var App = window.App;
  var DataStore = App.DataStore;
  var RemoteDataStore = App.RemoteDataStore;
  var PaymentHandler = App.PaymentHandler;
  var Truck = App.Truck;
  var remoteDS = new RemoteDataStore(SERVER_URL);
  var myTruck = new Truck('ncc-1701', remoteDS);
  window.myTruck = myTruck;
  var myStore = new DataStore();
  var newFormHandler = new PaymentHandler(FORM_SELECTOR);

  newFormHandler.addPaymentHandler(myTruck.createOrder.bind(myTruck)),
  function (data){
    myTruck.createOrder(data);
  };
})(window);
