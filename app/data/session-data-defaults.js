/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

  // Insert values here

  "addSealNumber": "",

  "changeSealNumber": "",

  "movement-reference": "20NL5631291B1A3361",

  "pageTitleAddOn": "– Manage your transit movements – GOV.UK",

  "saveAndReturn": "Back to manage transit movements",

  //Arrival notifications pages dates & times

  "tableOneDate": "22 February",

  "tableTwoDate": "21 February",

  "arrivalSentTime": "11:30am",

  "unloadingPermissionTime": "11:45am",

  "unloadingRemarksSentTime": "11:47am",

  "goodsReleasedTime": "11:49am",

  "movementReferenceReject": "20GB000060100C06E0",

  //Unloading remarks default values

  "total-gross-mass": "800.125",

  "vehicle-country": "United Kingdom",

  "vehicle-registration": "NG54",

  "removeComments": "",

  "changesToReport": "",

  //Departures defaults

  "local-reference-number": "OR023NCTSWEB100310930",

  "totalPackages": "50",

  "totalGrossMass": "850.125",

  //Departures - overview section captions

  "movementDetails": "General information",

  "items": "Items",

  "itemSize": 1,

  "itemNumber": 1,

  "packageNumber": 1,

  "routeDetails": "Route details",

  "transportDetails": "Transport details",
  
  "goodsSummary" : "Goods summary",

  "guaranteeSummary" : "Guarantee details",

  "traderDetails" : "Trader’s details",

  "itemDetails" : "Item details",

  "specialMentionType" : "",

  "nonEuCtcCountries" :["Andorra","Iceland", "Liechtenstein", "Norway", "San Marino", "Svalbard and Jan Mayen Islands", "Switzerland"],

  "containersUsed" : "Yes",

  "securityProcess" : "Yes",

  "safetySecurity" : "Safety and security",

  // "addSafetySecurityResponse" : "Yes",

  // "securityConsignorResponse" : "Yes",

  // "securityConsigneeResponse" : "No",

  "mentionNumber" : 1,

  

  // "dispatchCountry" : "United Kingdom12",
  // "country-of-destination" : "United Kingdom",

  // "addSafetySecurityResponse" : "Yes",
  // "addPaymentMethodResponse" : "Yes",
  // "addCommercialReferenceResponse" : "Yes",
  // "sameCommercialReferenceResponse" : "Yes"

  


  


  //For testing trader details & trader details in add items
  // "areYouTheConsignor" : "No ",
  // "isThereAConsignor" : "No ",
  // "areYouTheConsignee" : "No ",
  // "isThereAConsignee" : "Yes "


  // "declarationType" : "T2",

  // "dispatchCountry" : "Norway",

  //Placeholder for testing add items routing
  // "isThereAConsignor" : "No ",
  // "isThereAConsignee" : "No "

  // "containersUsed" : "Yes"

  

  //Placeholder for completing all sections on the task list
  // "on-behalf-of-someone-else" : "123",
  // "addAnotherOfficeOfTransit" : "123",
  // "changeAtBorder" : "123",
  // "add-consignee" : "123",
  // "liabilityAmount" : "123",
  // "departuresPreLodge" : "Yes",
  // "addAnotherItem" : "No "

}
