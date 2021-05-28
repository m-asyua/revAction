
var revAction           = function() {}
var my_revAction        = function() {}
my_revAction.prototype  = new revAction();

revAction.prototype =
{

    intervalTime      : 800,
    accessUrl         : "http://localhost/revAction/revAction.php",      // sample
    rev_str  : "",
    onChange  : function(){  },
    onChange2 : function(){
       my_revAction.prototype.ajax_read(); 
    },

    start    : function(){
       setTimeout(revAction.prototype.onChange2, revAction.prototype.intervalTime);  
    },

    ajax_read: function(){

	    var get_url = revAction.prototype.accessUrl+"?"+(new Date);  
		let req = new XMLHttpRequest();
		req.open("GET",get_url, true);
		req.setRequestHeader("Content-Type" , "application/x-www-form-urlencoded");

		req.onreadystatechange = function(){

			if(req.readyState == 4){
				result = req.responseText;

				if( result != null ){

					//  my_revAction.prototype.rev_str = result;
					my_revAction.prototype.onChange(result);
					setTimeout(revAction.prototype.onChange2, revAction.prototype.intervalTime);  

				}else{
//					alert("Ajax error");
					return;
				}
			}
		}
		req.send(null);
	}




};


