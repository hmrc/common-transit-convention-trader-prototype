module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  var filters = {}

  /* ------------------------------------------------------------------
    add your methods to the filters obj below this comment block:
    @example:

    filters.sayHi = function(name) {
        return 'Hi ' + name + '!'
    }

    Which in your templates would be used as:

    {{ 'Paul' | sayHi }} => 'Hi Paul'

    Notice the first argument of your filters method is whatever
    gets 'piped' via '|' to the filter.

    Filters can take additional arguments, for example:

    filters.sayHi = function(name,tone) {
      return (tone == 'formal' ? 'Greetings' : 'Hi') + ' ' + name + '!'
    }

    Which would be used like this:

    {{ 'Joel' | sayHi('formal') }} => 'Greetings Joel!'
    {{ 'Gemma' | sayHi }} => 'Hi Gemma!'

    For more on filters and how to write them see the Nunjucks
    documentation.

  ------------------------------------------------------------------ */

  function getData(){
    var dummyData = require('./data/data.js')
    return dummyData;
  }

  String.prototype.replaceAll = function (search, replacement) {
    var target = this
    return target.split(search).join(replacement)
  }

  filters.getCountry = function(code){
    if(code){
      var data = getData();
      var retVal = code;
      data.countries.forEach(function(country){
        if(country.value.toLowerCase().trim() == code.toLowerCase().trim()){
          //console.log("-" + country.value.toLowerCase().trim() + "-", "-" + code.toLowerCase().trim() + "-")
          retVal = country.text;
        }
      })
    }
    return retVal;
  }

  filters.getOffice = function(code){
    if(code){
      var data = getData();
      var retVal = code;
      data.officesOfDeparture.forEach(function(office){
        if(office.value.toLowerCase().trim() == code.toLowerCase().trim()){
          //console.log("-" + office.value.toLowerCase().trim() + "-", "-" + code.toLowerCase().trim() + "-")
          retVal = office.text;
        }
      })
    }
    return retVal;
  }

  filters.getConsignee = function (str) {
    switch(str){
      case "AuthorisedConsignee":
        return "Authorised consignee’s location";
      case "BorderForce":
        return "Border Force location";
      default:
        return str;
    }
  }

  filters.homepageTest = function (str) {
    switch(str){
      case "AuthorisedConsignee":
        return "Simplified";
      case "BorderForce":
        return "Normal";
      default:
        return str;
    }
  }



  filters.getpage = function (str, dir) {
    // gets the page part of the url for the page listings in admin
    // var p = str.split("/")
    // return p[p.length - 1]
    return str.replace(dir, '')
  }

  filters.toID = function (str) {
    return str.replaceAll(" ", "-").toLowerCase();
  }

  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */
  return filters
}
