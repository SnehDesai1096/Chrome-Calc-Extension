$(function(){

	$("#enter").keypress(function(e){
     		if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
               return false;
   			 }

	});
    
    chrome.storage.sync.get('display',function(calc){
        $('#display').text(calc.disp);
    });
	$('#add').click(function(){
		chrome.storage.sync.get('display',function(calc){
            var newvalue = 0;
            if (calc.display){
                newvalue += parseInt(calc.display);
            }

            var enter = $('#enter').val();

                newvalue += parseInt(enter);


            chrome.storage.sync.set({'display': newvalue});
            $('#display').text(newvalue);
            $('#enter').val('');

        });
	});

	$('#sub').click(function(){
		chrome.storage.sync.get('display',function(calc){
            var newvalue = 0;
            if (calc.display){
                newvalue += parseInt(calc.display);
            }

            var enter = $('#enter').val();

                newvalue -= parseInt(enter);


            chrome.storage.sync.set({'display': newvalue});
            $('#display').text(newvalue);
            $('#enter').val('');

        });
	});

	$('#multiply').click(function(){
		chrome.storage.sync.get('display',function(calc){
            if(calc.display == 0){
            	var newvalue = 1;
            }
            else{
            	var newvalue = 0;
        	}
            if (calc.display){
                newvalue += parseInt(calc.display);
            }

            var enter = $('#enter').val();

                newvalue *= parseInt(enter);


            chrome.storage.sync.set({'display': newvalue});
            $('#display').text(newvalue);
            $('#enter').val('');

        });
	});

	$('#divide').click(function(){
		chrome.storage.sync.get('display',function(calc){
            if(calc.display == 0){
            	var newvalue = 1;
            }
            else{
            	var newvalue = 0;
        	}
            if (calc.display){
                newvalue += parseInt(calc.display);
            }

            var enter = $('#enter').val();

                newvalue /= parseInt(enter);


            chrome.storage.sync.set({'display': newvalue});
            $('#display').text(newvalue);
            $('#enter').val('');

        });
	});

	$('#equal').click(function(){
		chrome.storage.sync.get('display',function(calc){
			var newvalue = 0;
            if (calc.display){
                newvalue += parseFloat(calc.display);
            }
            chrome.storage.sync.set({'display': newvalue});
            $('#display').text(newvalue);
		});

	});

	$('#ce').click(function(){
		chrome.storage.sync.set({'display': 0}, function(){
          
            var notifOptions = {
                type: "basic",
                iconUrl: "icon48.png",
                title: "Resetting Value",
                message: "Value has been reset to 0."
            };
           
            chrome.notifications.create('resetNotif', notifOptions);
            $('#display').text(0);
           
        });

	});

});