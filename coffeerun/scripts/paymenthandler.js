(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  // Constructor
  function PaymentHandler(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }

    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  PaymentHandler.prototype.addPaymentHandler = function(fn) {
    console.log('Setting submit handler for form in paymenthandler: 19');
    this.$formElement.on('submit', function(event) {
      var msg = document.getElementById("mail").value;
      alert("Thank you for your payment, " + msg);
      window.close();
    });
  };
  App.PaymentHandler = PaymentHandler;
  window.App = App;
})(window);
