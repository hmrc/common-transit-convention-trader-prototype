/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

// Find first ancestor of el with tagName
// or undefined if not found
function upTo(el, tagName) {
  tagName = tagName.toLowerCase();

  while (el && el.parentNode) {
    el = el.parentNode;
    if (el.tagName && el.tagName.toLowerCase() == tagName) {
      return el;
    }
  }

  // Many DOM methods return null if they don't
  // find the element they are searching for
  // It would be OK to omit the following and just
  // return undefined
  return null;
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()

  if (document.querySelector('.autocomplete') != null || document.querySelector('.autocomplete-country') != null) {
    var originalSelect;
    var graphUrl = '/public/javascripts/location-autocomplete-filtered.json'


    if(document.querySelector('.autocomplete') != null){
        originalSelect = document.querySelector('.autocomplete');
        accessibleAutocomplete.enhanceSelectElement({
            selectElement: document.querySelector('.autocomplete'),
            minLength: 5,
            showAllValues: true
        });
    }
    if(document.querySelector('.autocomplete-country') != null){
        // get graph
        originalSelect = document.querySelector('.autocomplete-country');
        openregisterLocationPicker({
            selectElement: document.querySelector('.autocomplete-country'),
            url: graphUrl
        })
    }

    // =====================================================
    // Update autocomplete once loaded with fallback's aria attributes
    // Ensures hint and error are read out before usage instructions
    // =====================================================
    setTimeout(function(){
        if(originalSelect && originalSelect.getAttribute('aria-describedby') > ""){
            var parentForm = upTo(originalSelect, 'form');
            if(parentForm){
                var combo = parentForm.querySelector('[role="combobox"]');
                if(combo){
                    combo.setAttribute('aria-describedby', originalSelect.getAttribute('aria-describedby') + ' ' + combo.getAttribute('aria-describedby'));
                }
            }

        }
    }, 2000)
  }
})
