public class ExchangeRatesBatch implements Database.Batchable<String>, Database.AllowsCallouts {
    public List<String> start(Database.BatchableContext bc) {
        return new List<String> { 
            'INR', 'AUD', 'BGN', 'BRL', 'CAD', 
            'CHF', 'CNY', 'CZK', 'DKK', 'GBP', 
            'HKD', 'HRK', 'HUF', 'IDR', 'ILS', 
            'JPY', 'KRW', 'MXN', 'MYR', 'NOK', 
            'NZD', 'PHP', 'PLN', 'RON', 'RUB', 
            'SEK', 'SGD', 'THB', 'TRY', 'USD', 
            'ZAR', 'EUR' 
    	};
    }
    
    public void execute(Database.BatchableContext bc, List<String> scope) {
        Http http = new Http();
        
        HttpRequest request = new HttpRequest();
        request.setMethod('GET');
        request.setEndpoint('https://api.fixer.io/latest?base=' + scope[0]);
        
        try {
            HttpResponse response = http.send(request);            
            String responseString = response.getBody().replace('date', 'lastUpdated');            
            ExchangeRatesInformation exchangeRateDetails = (ExchangeRatesInformation) JSON.deserialize(responseString, ExchangeRatesInformation.class);
            
            List<Exchange_Rates__c> exList = new List<Exchange_Rates__c>();
            for(String key : exchangeRateDetails.rates.keySet()) {
                Exchange_Rates__c er = new Exchange_Rates__c();
                er.FromTicker__c = exchangeRateDetails.base;
                er.ToTicker__c = key;
                er.Rate__c = exchangeRateDetails.rates.get(key);
                er.LastFetched__c = Date.valueOf(exchangeRateDetails.lastUpdated) ;
                
                exList.add(er);
            }
            
            insert exList;
        } catch(Exception ex) {
            System.debug('## ' + ex.getMessage());
        }
    }
    
    public void finish(Database.BatchableContext bc) {
        
    }
}