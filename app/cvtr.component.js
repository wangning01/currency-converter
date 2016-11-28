'use strict';

angular.
	module('cvtrApp').
	component('currencyConverter',{
		//templateUrl: 'app/currency-converter.template.html',
		templateUrl: 'currency-converter-tpl',
		controller: ['Currency',
		  function CurrencyConverterController(Currency) {
			var thisObj = this;
			thisObj.cvtedCurrency={
				symbol:"USD",
				amount: null
			};
			thisObj.inputCurrency={
				symbol:"CAD",
				amount: 1
			};
			thisObj.currencyList = [];
			
			var data = Currency.retrieveData(function(){
				var symbol;
				for(symbol in data.rates){
					thisObj.currencyList.push(symbol);
				}
				thisObj.cvtedCurrency.amount = 
					(thisObj.inputCurrency.amount) * (data.rates[thisObj.cvtedCurrency.symbol]) / data.rates[thisObj.inputCurrency.symbol];
			});
			
			thisObj.calculate = function(){
				thisObj.cvtedCurrency.amount = 
					(thisObj.inputCurrency.amount) * (data.rates[thisObj.cvtedCurrency.symbol]) / data.rates[thisObj.inputCurrency.symbol];
			};
			
			
			
			
			
			
			
		  }
		]
	})