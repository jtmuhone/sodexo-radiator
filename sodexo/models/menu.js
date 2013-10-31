steal('jquery/model', function() {

/**
 * @class Sodexo.Main.Init
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend init services.  
 */
$.Model('Sodexo.Menu',
/* @Static */
{
    findOne: "GET /rest/ruokalistat/output/daily_json/{restaurant}/{year}/{month}/{day}/fi"
},
/* @Prototype */
{});
})