steal("funcunit", function(){
	module("sodexo test", { 
		setup: function(){
			S.open("//sodexo/sodexo.html");
		}
	});
	
	test("Copy Test", function(){
		equals(S("h1").text(), "Welcome to JavaScriptMVC 3.2!","welcome text");
	});
})