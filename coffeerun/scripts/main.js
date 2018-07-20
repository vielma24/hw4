(function(window) {
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
  var SERVER_URL = 'http://localhost:2403/coffeeorders';
  //var SERVER_URL = 'http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders';
  var App = window.App;
  var DataStore = App.DataStore;
  var RemoteDataStore = App.RemoteDataStore;
  var FormHandler = App.FormHandler;
  var Truck = App.Truck;
  var Validation = App.Validation;
  var CheckList = App.CheckList;
  var remoteDS = new RemoteDataStore(SERVER_URL);
  var myTruck = new Truck('ncc-1701', remoteDS);
  window.myTruck = myTruck;
  var checkList = new CheckList(CHECKLIST_SELECTOR);
  checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(function(data) {
    myTruck.createOrder(data);
    checkList.addRow(data);
  });

  formHandler.addInputHandler(Validation.isCompanyEmail);
})(window);

function updateTextInput(val) {
  if (val <= 33) {
    document.getElementById("strength").style.color = "#26af07";
  }
  if (val > 33 && val <= 66) {
    document.getElementById("strength").style.color = "#f2cd00";
  }
  if (val > 66) {
    document.getElementById("strength").style.color = "red";
  }
  document.getElementById("strength").value = val;
}
