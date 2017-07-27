({
	doInit : function(component, event, helper) {
        helper.callServer(component, "c.getExchangeRateFor", function(result) {
            component.set("v.selectedExchangeRate", result);
            component.set("v.inputFromCurrency", 1);
            component.set("v.inputToCurrency", result);
        }, {
            "fromCurrencyTicker" : component.get("v.selectedFromCurrency"),
            "toCurrencyTicker" : component.get("v.selectedToCurrency")
        });
	},
    onInputFromCurrencyChange : function(component, event, helper) {
        var fromCurrency = component.get("v.inputFromCurrency");
        var exchangeRate = component.get("v.selectedExchangeRate");
        component.set("v.inputToCurrency", fromCurrency * exchangeRate);
	},
    onInputToCurrencyChange : function(component, event, helper) {
        var toCurrency = component.get("v.inputToCurrency");
        var exchangeRate = component.get("v.selectedExchangeRate");
        component.set("v.inputFromCurrency", toCurrency / exchangeRate);
	},
    onSelectFromCurrencyChange : function(component, event, helper) {
        helper.callServer(component, "c.getExchangeRateFor", function(result) {
            component.set("v.selectedExchangeRate", result);
            component.set("v.inputToCurrency", component.get("v.inputFromCurrency") * result);
        }, {
            "fromCurrencyTicker" : component.get("v.selectedFromCurrency"),
            "toCurrencyTicker" : component.get("v.selectedToCurrency")
        });
	},
    onSelectToCurrencyChange : function(component, event, helper) {
        helper.callServer(component, "c.getExchangeRateFor", function(result) {
            component.set("v.selectedExchangeRate", result);
            component.set("v.inputToCurrency", component.get("v.inputFromCurrency") * result);
        }, {
            "fromCurrencyTicker" : component.get("v.selectedFromCurrency"),
            "toCurrencyTicker" : component.get("v.selectedToCurrency")
        });
	}
})