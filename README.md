# Currency Converter

## License
Apache License, Version 2.0. See [Apache License, Version 2.0](https://opensource.org/licenses/Apache-2.0) for more details.

## Description
An c:CurrencyConverter creates an currency conversion component that allows you to convert to and from multiple currencies as you type. The exchange rates are updated on a daily basis, thanks to another GitHub project by [hakanensari](https://github.com/hakanensari/fixer-io).

## Usage
```sh
<c:CurrencyConverter selectedFromCurrency="INR" 
			selectedToCurrency="USD" />
```

## Attributes
| Name | Type | Description |
| ------ | ------ | ------ |
| selectedFromCurrency | String | Required. Currency from which to convert from.
| selectedToCurrency | String | Required. Currency from which to convert to.

## Features
* Simple, Elegant and Responsive UI.
* On the fly currncy conversion, as you type.

## To-Do
* Add more currency support.
* Use of a more standard exchange rates API.

## Dependencies
* NA

## Screenshots
### Fig 1: Setup:

![Fig 1: Setup:](https://github.com/pranavraulkar/lightning-currencyconverter/blob/master/screenshots/currencyconverter_setup.png)

### Fig 2: Working:

![Fig 2: Working:](https://github.com/pranavraulkar/lightning-currencyconverter/blob/master/screenshots/currencyconverter_working.png)