steal('./resources/resources.js',
      'steal/less')
.then('./models/models.js')
.then('sodexo/main/init')
.then('./sodexo.less',
    function() {
        if (steal.options.env == 'fixtures') {
            steal("./fixtures/fixtures.js");
        }
    },
    function(){
	$(function() {
	    $('body').sodexo_main_init();
	});

    })
