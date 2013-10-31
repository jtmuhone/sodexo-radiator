steal('./resources/resources.js',
      'steal/less')
    .then(function() {
        steal('sodexo/models/models.js');
    })
    .then(function() {
        steal('sodexo/main/init');
    })
    .then(function() {
        steal('sodexo/sodexo.less');
    })
    .then(function(){
	    $(function() {
	        $('body').sodexo_main_init();
	    });
        
    })
