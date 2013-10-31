steal('jquery')
    .then(function() {
        steal('./config.js', './date.js', './querystring.js');
    })
