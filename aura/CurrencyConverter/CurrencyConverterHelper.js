({
	callServer : function(component, method, callback, param) {
        // Get reference to controller action. //c.getAutocompleteEntries
		var action = component.get(method);
        
        //Set storable
        action.setStorable();
        
        // Set the action parameters if present.
        if(param) {
            action.setParams(param);
        }
        
        // Set the action callback
        action.setCallback(this, function(response) {
            var state = response.getState();
            
            // Check the response status and validate component
            if(state === "SUCCESS" && component.isValid()) {
                // Invoke registered callback
                callback.call(this, response.getReturnValue());
            } else if(state === "ERROR") {
                // In case of error, show toast with (all) error details
                var errMessage = '';   
                
                // Concatenate all errors
                response.getError().forEach(function(err) {
                    errMessage += err.message + '\n';
                }); 
                
                // Display error toast
                this.showToast({
                    "title" : "ERROR",
                    "message" : errMessage,
                    "type" : "error"                    
                });
            }
            
            $A.util.toggleClass(spinner, "slds-hide")
        });
        
        $A.enqueueAction(action);
        
        var spinner = component.find("mySpinner");
        $A.util.toggleClass(spinner, "slds-hide");
	},
    
    showToast : function(params) {
        var toast = $A.get("e.force:showToast");      
        if(toast) {
			toast.setParam(params);        
        	toast.fire();            
        } else {
            alert(params.title + " : " + params.errMessage); 
        }        
    }
})