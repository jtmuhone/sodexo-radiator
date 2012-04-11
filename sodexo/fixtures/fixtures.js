// map fixtures for this application

steal("jquery/dom/fixture", function(){
	      var FIXTURE = {"meta": {
	    "generated_timestamp": 1334061203,
	    "requested_timestamp": 1334005200,
	    "ref_url": "http:\/\/www.sodexo.fi\/pasila",
	    "ref_title": "Elisa Pasila"
	},
	"courses": [
	    {
		"title_fi": "Pannupihvi, kermainen sinappikastike",
		"title_en": "Minced meat patties, creamy mustard sauce",
		"properties": "G, L, M"
	    },
	    {
		"title_fi": "Silakkapihvit, tilli-kermaviilikastike",
		"title_en": "Baltic herring patties, dill sour cream sauce",
		"properties": "L"
	    },
	    {
		"title_fi": "Kasvispihvit, omena-kermaviilikastike",
		"title_en": "Vegetable patties, apple sour cream sauce",
		"properties": "VL"
	    },
	    {
		"title_fi": " Purjo-perunasosekeitto",
		"title_en": "Vichysoisse",
		"properties": "G, VL"
	    },
	    {
		"title_fi": " Tandooribroilerisalaatti",
		"title_en": " Tandor chicken salad",
		"properties": "G, L, M"
	    },
	    {
		"title_fi": "Hedelm\u00e4jogurtti",
		"title_en": "Fruit yoghurt",
		"properties":"G, L"
	    }
	]};

    $.fixture("GET /ruokalistat/output/daily_json/{restaurant}/{year}/{month}/{day}/fi",
	      function (orig, settings, headers) {
		  return [200, "success", FIXTURE, {}];
	      });
});
