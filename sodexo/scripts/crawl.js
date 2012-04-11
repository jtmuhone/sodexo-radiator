// load('sodexo/scripts/crawl.js')

load('steal/rhino/rhino.js')

steal('steal/html/crawl', function(){
  steal.html.crawl("sodexo/sodexo.html","sodexo/out")
});
