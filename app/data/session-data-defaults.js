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

  "pageTitleAddOn": "– Common Transit Convention for traders – GOV.UK",

  "saveAndReturn": "Back to manage transit movements",

  //Arrival notifications pages dates & times

  "tableOneDate": "17 July",

  "tableTwoDate": "15 July",

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

  "totalGrossMass": "850",

  //Departures - overview section captions

  "movementDetails": "Movement details",

  "routeDetails": "Route details",

  "transportDetails": "Transport details",

}
