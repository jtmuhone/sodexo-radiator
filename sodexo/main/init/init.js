steal( 'jquery/controller',
       'jquery/view/ejs',
       'jquery/controller/view')
.then( './views/init.ejs', './views/error.ejs',
       function($){

/**
 * @class Sodexo.Main.Init
 * @parent index
 * @inherits jQuery.Controller
 * Lists inits and lets you destroy them.
 */
$.Controller('Sodexo.Main.Init',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
    init : function() {
	var restaurantId = $.QueryString["restaurantId"];
	if (restaurantId) {
	    var date = new Date();
	    var params = {restaurant: restaurantId,
			  year: date.getFullYear(),
			  month: date.getMonth() + 1,
			  day: date.getDate()};
	    Sodexo.Menu.findOne(params, this.callback("success"),
				this.callback("fail"));
	} else {
	    this.fail({"statusText": "No restaurantId"});
	}
    },
    success : function(menu) {
	this.element.html(this.view('init', menu));
    },
    fail : function(error) {
	this.element.html(this.view('error', {error: error.statusText}));
    }
    
});
	   
});