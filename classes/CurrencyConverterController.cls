public with sharing class CurrencyConverterController {
    @AuraEnabled
    public static Decimal getExchangeRateFor(String fromCurrencyTicker, String toCurrencyTicker) {
        Decimal selectedExchangeRate = -1;
        
        if(!String.isEmpty(fromCurrencyTicker) && !String.isEmpty(toCurrencyTicker) &&
           fromCurrencyTicker.length() == 3 && toCurrencyTicker.length() == 3) {
            List<Exchange_Rates__c> erList = [SELECT Rate__c FROM Exchange_Rates__c
                                              WHERE FromTicker__c = :fromCurrencyTicker
                                              AND ToTicker__c = :toCurrencyTicker LIMIT 1];
            selectedExchangeRate = erList[0].Rate__c;
        }
        
        return selectedExchangeRate;
    }
}