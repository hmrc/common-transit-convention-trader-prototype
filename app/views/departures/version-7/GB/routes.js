const express = require('express');
const session = require('express-session');
const { NULL } = require('node-sass');
const router = express.Router()

// Add your routes here - above the module.exports line

// Task list confirm change routing
router.post('/declaration-type', function (req, res) {

    let confirmChangeMovement = req.session.data.confirmChangeMovement;

    if (confirmChangeMovement == 'Yes') {
        res.redirect('declaration-type');
    } else {
        res.redirect('../task-list');
    }
})
router.post('/movement-details/dispatch-country', function (req, res) {

    let confirmChangeRoute = req.session.data.confirmChangeRoute;

    if (confirmChangeRoute == 'Yes') {
        res.redirect('dispatch-country');
    } else {
        res.redirect('../task-list');
    }
})
router.post('/movement-details/inland-mode', function (req, res) {

    let confirmChangeTransport = req.session.data.confirmChangeTransport;

    if (confirmChangeTransport == 'Yes') {
        res.redirect('inland-mode');
    } else {
        res.redirect('../task-list');
    }
})
router.post('/add-items/item-warning', function (req, res) {

    let itemWarning = req.session.data.itemWarning;

    if (itemWarning == 'Yes') {
        res.redirect('item-details/item-description');
    } else {
        res.redirect('../task-list');
    }
})



router.post('/movement-details/procedure-type-route', function (req, res) {

    let departuresProcedureType = req.session.data.departuresProcedureType;

    if (departuresProcedureType == 'Normal') {
        res.redirect('will-you-be-pre-lodging');
    } else {
        res.redirect('containers-used');
    }

})

router.post('/departures-history-search-route', function (req, res) {
  var sessionData = req.session.data;
  let notificationSearch = sessionData.notificationSearch;
  if (notificationSearch != '') {
      res.redirect('departures-history-search-results');
  } else {
      res.redirect('departures-history-search-error');
  }
})

/*
    Cancel departure
    If the user selects "yes" to cancel departure, take them to "departure cancelled confirmation"
    If the user selects "no" to cancel departure, take them to "departures drafts"
*/

router.post('/cancel-departure', function (req, res) {

    let cancelDeparture = req.session.data.cancelDeparture;

    if (cancelDeparture == 'Yes') {
        res.redirect('cancel-departure-confirmation');
    } else {
        res.redirect('departures-drafts');
    }

})

/*
    If Adding safety and security details is needed
    transite arrival date of transit office will be added
*/

router.post('/route/added-transit-offices-route', function (req, res) {
    let securityVal = req.session.data.addSafetySecurityResponse;
    if (securityVal == 'Yes') {
        res.redirect('arrival-times-at-office-of-transit');
    } else {
        res.redirect('added-transit-offices');
    }
})

/**
 * Safety & Security Details Routing
 */

router.post('/security/add-circumstance-indicator-route', function (req, res) {
    let addCircumstanceIndicatorResponse = req.session.data.addCircumstanceIndicatorResponse;
    if (addCircumstanceIndicatorResponse == 'Yes') {
        res.redirect('circumstance-indicator');
    } else {
        res.redirect('add-payment-method');
    }
})

router.post('/security/add-payment-method-route', function (req, res) {
    let addPaymentMethodResponse = req.session.data.addPaymentMethodResponse;
    if (addPaymentMethodResponse == 'Yes') {
        res.redirect('transport-charges');
    } else {
        res.redirect('add-commercial-reference-number');
    }
})

router.post('/security/add-commercial-reference-route', function (req, res) {
    let addCommercialReferenceResponse = req.session.data.addCommercialReferenceResponse;
    if (addCommercialReferenceResponse == 'Yes') {
        res.redirect('same-commercial-reference-number');
    } else {
        req.url = '/security/commercial-reference-route';
        return router.handle(req, res);
    }
})

router.post('/security/same-commercial-reference-route', function (req, res) {
    let sameCommercialReferenceResponse = req.session.data.sameCommercialReferenceResponse;
    if (sameCommercialReferenceResponse == 'Yes') {
        res.redirect('commercial-reference-number');
    } else {
        req.url = '/security/commercial-reference-route';
        return router.handle(req, res);
    }
})

router.post('/security/commercial-reference-route', function (req, res) {
    let modeAtBorder = req.session.data.modeAtBorder;
    if (modeAtBorder == '(4) Air transport' || modeAtBorder == '(40) Air transport') {
        res.redirect('conveyance-reference-number');
    } else {
        res.redirect('add-conveyance-reference-number');
    }
})

router.post('/security/add-conveyance-reference-route', function (req, res) {
    let addConveyanceReferenceResponse = req.session.data.addConveyanceReferenceResponse;
    if (addConveyanceReferenceResponse == 'Yes') {
        res.redirect('conveyance-reference-number');
    } else {
        req.url = '/security/conveyance-reference-route';
        return router.handle(req, res);
    }
})

router.post('/security/conveyance-reference-route', function (req, res) {
    let circumstanceIndicator = req.session.data.circumstanceIndicator;
    if (circumstanceIndicator == '(E) Authorised economic operators') {
        res.redirect('add-place-of-unloading');
    } else {
        res.redirect('place-of-unloading');
    }
})

router.post('/security/add-place-of-unloading-route', function (req, res) {
    let addUnloadingPlaceResponse = req.session.data.addUnloadingPlaceResponse;
    if (addUnloadingPlaceResponse == 'Yes') {
        res.redirect('place-of-unloading');
    } else {
        res.redirect('country-of-routing');
    }
})

router.post('/security/country-of-routing-route', function (req, res) {
    var sessionData = req.session.data;
    var countriesArray = sessionData.countriesArray || [];
    var country = {
        "id": countriesArray.length + 1,
        "country": sessionData.countryOfRoutingResponse,
    }
    countriesArray.push(country);
    sessionData.countriesArray = countriesArray;
    sessionData.countriesCount = countriesArray.length;
    res.redirect('add-another-country');
})

router.post('/security/add-another-country-route', function (req, res) {
    let addAnotherCountryResponse = req.session.data.addAnotherCountryResponse;
    if (addAnotherCountryResponse == 'Yes') {
        res.redirect('country-of-routing');
    } else {
        res.redirect('trader-security/security-consignor');
    }
})

router.post('/security/remove-country-route', function (req, res) {
    var sessionData = req.session.data;
    let removeCountryResponse = sessionData.removeCountryResponse;
    var countriesArray = sessionData.countriesArray;
    if (removeCountryResponse == 'Yes')
        countriesArray.length = countriesArray.length - 1
    sessionData.countriesArray = countriesArray;
    sessionData.countriesCount = countriesArray.length;
    res.redirect('add-another-country');
})

router.post('/security/trader-security/same-security-consignor-route', function (req, res) {
    let sameSecurityConsignorResponse = req.session.data.sameSecurityConsignorResponse;
    if (sameSecurityConsignorResponse == 'Yes') {
        res.redirect('same-security-consignee');
    } else {
        res.redirect('security-consignor');
    }
})

router.post('/security/trader-security/security-consignor-route', function (req, res) {
    let securityConsignorResponse = req.session.data.securityConsignorResponse;
    if (securityConsignorResponse == 'Yes') {
        res.redirect('what-is-consignor-eori');
    } else {
        res.redirect('security-consignee');
    }
})

router.post('/security/trader-security/is-consignor-eori-known-route', function (req, res) {
    let isSecurityConsignorEoriKnown = req.session.data.isSecurityConsignorEoriKnown;
    if (isSecurityConsignorEoriKnown == 'Yes') {
        res.redirect('what-is-consignor-eori');
    } else {
        res.redirect('consignor-name');
    }
})

router.post('/security/trader-security/same-security-consignee-route', function (req, res) {
    let sameSecurityConsigneeResponse = req.session.data.sameSecurityConsigneeResponse;
    if (sameSecurityConsigneeResponse == 'Yes') {
        res.redirect('add-a-carrier');
    } else {
        res.redirect('security-consignee');
    }
})

router.post('/security/trader-security/security-consignee-route', function (req, res) {
    let securityConsigneeResponse = req.session.data.securityConsigneeResponse;
    if (securityConsigneeResponse == 'Yes') {
        res.redirect('is-consignee-eori-known');
    } else {
        res.redirect('add-a-carrier');
    }
})

router.post('/security/trader-security/is-consignee-eori-known-route', function (req, res) {
    let isSecurityConsigneeEoriKnown = req.session.data.isSecurityConsigneeEoriKnown;
    if (isSecurityConsigneeEoriKnown == 'Yes') {
        res.redirect('what-is-consignee-eori');
    } else {
        res.redirect('consignee-name');
    }
})

router.post('/security/trader-security/add-a-carrier-route', function (req, res) {
    let addACarrierResponse = req.session.data.addACarrierResponse;
    if (addACarrierResponse == 'Yes') {
        res.redirect('is-carrier-eori-known');
    } else {
        res.redirect('../check-answers');
    }
})

router.post('/security/trader-security/is-carrier-eori-known-route', function (req, res) {
    let isCarrierEoriKnown = req.session.data.isCarrierEoriKnown;
    if (isCarrierEoriKnown == 'Yes') {
        res.redirect('what-is-carrier-eori');
    } else {
        res.redirect('carrier-name');
    }
})


router.post('/security/trader-security/check-answers-route', function (req, res) {
    res.redirect('../check-answers');
})

router.post('/security/check-answers-route', function (req, res) {
    res.redirect('../task-list');
})


/*
    Add items

    item details
*/

// router.post('/add-items/all-items-belong-to-trader', function (req, res) {
//     res.redirect('item-details/item-description');
// });

router.post('/add-items/items-belong-to-trader/check-answers-route', function (req, res) {
    res.redirect('check-answers');
});

router.post('/add-items/items-belong-to-trader/check-answers', function (req, res) {
    res.redirect('../item-details/item-description');
});

router.post('/add-items/item-description-route', function (req, res) {
    res.redirect('item-details/item-description');
});

router.post('/add-items/item-details/total-gross-mass-route', function (req, res) {
    res.redirect('total-gross-mass');
});


router.post('/add-items/item-details/add-gross-mass', function (req, res) {
    var sessionData = req.session.data;
    let grossMassResponse = sessionData.grossMassResponse;
    if (grossMassResponse == 'Yes') {
        res.redirect('total-gross-mass');
    } else {
        sessionData.grossMass = '';
        res.redirect('add-total-net-mass');
    }
})

router.post('/add-items/item-details/add-total-net-mass-route', function (req, res) {
    res.redirect('add-total-net-mass');
});

router.post('/add-items/item-details/add-net-mass', function (req, res) {
    var sessionData = req.session.data;
    let netMassResponse = sessionData.netMassResponse;
    if (netMassResponse == 'Yes') {
        res.redirect('total-net-mass');
    } else {
        sessionData.netMass = '';
        res.redirect('is-commodity-code-known');
    }
})

router.post('/add-items/item-details/check-answers-route', function (req, res) {
    var sessionData = req.session.data;
    let commodityCodeResponse = sessionData.commodityCodeResponse;
    let isThereAConsignee = sessionData.isThereAConsignee;
    let isThereAConsignor = sessionData.isThereAConsignor;
    let areYouTheConsignor = sessionData.areYouTheConsignor;
    let areYouTheConsignee = sessionData.areYouTheConsignee;

    if (commodityCodeResponse == 'Yes') {
        res.redirect('commodity-code');
    } else {

        if (areYouTheConsignor == 'Yes ' || isThereAConsignor == 'Yes ') {

            if (areYouTheConsignee == 'Yes ' || isThereAConsignee == 'Yes ') {
                res.redirect('../packages/package-type');
            }
            else {
                res.redirect('../trader-details/is-consignee-eori-known');
            }
        }
        else {
            res.redirect('../trader-details/is-consignor-eori-known');
        }
    }
})

// router.post('/add-items/item-details/check-answers-route', function (req, res) {
//     var sessionData = req.session.data;
//     let commodityCodeResponse = sessionData.commodityCodeResponse;
//     let isThereAConsignee = sessionData.isThereAConsignee;
//     let isThereAConsignor = sessionData.isThereAConsignor;
//     let areYouTheConsignor = sessionData.areYouTheConsignor;
//     let areYouTheConsignee = sessionData.areYouTheConsignee;

//     if (commodityCodeResponse == 'Yes') {
//         res.redirect('commodity-code');
//     } else {

//         if (areYouTheConsignor == 'Yes ' || isThereAConsignor == 'Yes ' && areYouTheConsignor == 'Yes ' || isThereAConsignee == 'Yes '){
//             res.redirect('../packages/package-type');
//         }

//         // if (isThereAConsignor == 'Yes ' && isThereAConsignee == 'Yes '){
//         //     res.redirect('../packages/package-type');
//         // }
//         else if (isThereAConsignor == 'Yes ' && isThereAConsignee == 'No '){
//             res.redirect('../trader-details/is-consignee-eori-known');
//         } 
//          else {
//             res.redirect('../trader-details/is-consignor-eori-known');
//         }
//     }
// })


router.post('/add-items/item-details/is-commodity-code-known-route', function (req, res) {
    res.redirect('is-commodity-code-known');
});

router.post('/add-items/item-details/is-commodity-code-known', function (req, res) {
    var sessionData = req.session.data;
    let commodityCodeResponse = sessionData.commodityCodeResponse;
    if (commodityCodeResponse == 'Yes') {
        res.redirect('commodity-code');
    } else {
        sessionData.commodityCodeResponse = '';
        res.redirect('check-answers');
    }
})

router.post('/add-items/item-details/commodity-code', function (req, res) {
    // res.redirect('check-answers');
    var sessionData = req.session.data;

    let isThereAConsignee = sessionData.isThereAConsignee;
    let isThereAConsignor = sessionData.isThereAConsignor;
    let areYouTheConsignor = sessionData.areYouTheConsignor;
    let areYouTheConsignee = sessionData.areYouTheConsignee;

    if (areYouTheConsignor == 'Yes ' || isThereAConsignor == 'Yes ') {

        if (areYouTheConsignee == 'Yes ' || isThereAConsignee == 'Yes ') {
            res.redirect('../packages/package-type');
        }
        else {
            res.redirect('../trader-details/is-consignee-eori-known');
        }
    }
    else {
        res.redirect('../trader-details/is-consignor-eori-known');
    }
});



// router.post('/add-items/item-details/check-answers-route', function (req, res) {
//     var sessionData = req.session.data;
//     let belongToTrader = sessionData.belongToTrader;
//     if (belongToTrader == 'Yes') {
//         res.redirect('../packages/package-type');
//     } else {
//         res.redirect('../trader-details/add-consignor');
//     }
// })


//If all items belong to consignee & all items belong to consignor, go to type of package
//Else go to 

/**
 * Trader Details Routing
 */
router.post('/add-items/item-details/trader-details-route', function (req, res) {
    var sessionData = req.session.data;
    let allItemsBelongToConsignee = sessionData.allItemsBelongToConsignee;
    let allItemsBelongToConsignor = sessionData.allItemsBelongToConsignor;

    if (allItemsBelongToConsignor == 'Yes ') {

        if (allItemsBelongToConsignee == 'Yes ') {
            res.redirect('../packages/package-type');
        } else {
            res.redirect('../trader-details/is-consignee-eori-known');
        }

    } else {
        res.redirect('../trader-details/is-consignor-eori-known');
    }
})

router.post('/add-items/trader-details/consignor-eori-route', function (req, res) {



    var sessionData = req.session.data;

    let isThereAConsignee = sessionData.isThereAConsignee;
    let areYouTheConsignee = sessionData.areYouTheConsignee;

    if (areYouTheConsignee == 'Yes ' || isThereAConsignee == 'Yes ') {
        res.redirect('../packages/package-type');
    } else {
        res.redirect('is-consignee-eori-known');
    }
})

/* 
    Consignor EORI needs to go to consignor's name
    Consignor's address needs to do the route above 
*/

router.post('/add-items/trader-details/consignor-address-route', function (req, res) {

    var sessionData = req.session.data;
    let isThereAConsignee = sessionData.isThereAConsignee;
    let areYouTheConsignee = sessionData.areYouTheConsignee;

    if (areYouTheConsignee == 'Yes ' || isThereAConsignee == 'Yes ') {
        res.redirect('../packages/package-type');

    } else {
        res.redirect('is-consignee-eori-known');
    }
})







router.post('/add-items/item-details/save-item', function (req, res) {
    var sessionData = req.session.data;
    var itemsArray = sessionData.itemsArray || [];
    var item = {
        "id": itemsArray.length + 1,
        "description": sessionData.itemDescription,
        "grossMass": sessionData.grossMass,
        "netMass": sessionData.netMass,
        "code": sessionData.itemCode
    }
    itemsArray.push(item);
    sessionData.itemsArray = itemsArray;
    sessionData.itemsize = itemsArray.length;
    sessionData.itemNumber = itemsArray.length + 1;

    res.redirect('../check-answers');
})

router.post('/add-items/delete-item', function (req, res) {
    var sessionData = req.session.data;
    let removeItemResponse = sessionData.removeItemResponse;
    var itemsArray = sessionData.itemsArray;
    if (removeItemResponse == 'Yes')
        itemsArray.length = itemsArray.length - 1
    sessionData.itemsArray = itemsArray;
    sessionData.itemsize = itemsArray.length;
    sessionData.itemNumber = itemsArray.length + 1;
    res.redirect('add-items');
})

/**
 * Item Packages Routing
 */

router.post('/add-items/packages/package-type-route', function (req, res) {
    var sessionData = req.session.data;
    let packageTypeResponse = sessionData.packageTypeResponse;
    if (packageTypeResponse.toLowerCase().includes("bulk") || packageTypeResponse.toLowerCase().includes("unpacked")) {
        res.redirect('declare-number-of-package');
    } else {
        res.redirect('total-packages');
    }
})


router.post('/add-items/packages/package-type-number-route', function (req, res) {
    var sessionData = req.session.data;
    let packageTypeResponse = sessionData.packageTypeResponse;
    let packageTypeNumberResponse = sessionData.packageTypeNumberResponse;
    if (packageTypeNumberResponse == 'Yes') {
        res.redirect('total-packages');
    } else {
        if (packageTypeResponse.toLowerCase().includes("unpacked"))
            res.redirect('total-pieces');
        else
            res.redirect('add-mark');
    }
})


router.post('/add-items/packages/total-packages-route', function (req, res) {
    var sessionData = req.session.data;
    let packageTypeResponse = sessionData.packageTypeResponse;

    if (packageTypeResponse.toLowerCase().includes("unpacked"))
        res.redirect('total-pieces');
    else if (packageTypeResponse.toLowerCase().includes("bulk"))
        res.redirect('add-mark');
    else
        res.redirect('declare-mark');

})

router.post('/add-items/packages/add-mark-route', function (req, res) {
    var sessionData = req.session.data;
    let addMarkResponse = sessionData.addMarkResponse;
    if (addMarkResponse == 'Yes') {
        res.redirect('declare-mark');
    } else {
        req.url = '/add-items/packages/add-package';
        return router.handle(req, res)
    }
})

router.post('/add-items/packages/add-package', function (req, res) {
    var sessionData = req.session.data;
    var packagesArray = sessionData.packagesArray || [];
    var package = {
        "id": packagesArray.length + 1,
        "type": sessionData.packageTypeResponse,
        "packageNumbers": sessionData.packageNumbers,
        "itemPieces": sessionData.itemPieces,
        "mark": sessionData.itemMark
    }
    packagesArray.push(package);
    sessionData.packagesArray = packagesArray;
    sessionData.packageCount = packagesArray.length;
    sessionData.packageNumber = packagesArray.length + 1;
    res.redirect('add-another-package');
})

router.post('/add-items/packages/add-another-package', function (req, res) {
    var sessionData = req.session.data;
    let addAnotherPackage = sessionData.addAnotherPackage;
    let containersUsed = sessionData.containersUsed;

    if (addAnotherPackage == 'Yes') {
        res.redirect('package-type');
    } else {

        if (containersUsed == 'Yes') {
            res.redirect('../containers/container-number');
        } else {
            res.redirect('../special-mentions/add-special-mention');
        }

    }
})

router.post('/add-items/packages/delete-package', function (req, res) {
    var sessionData = req.session.data;
    let removePackageResponse = sessionData.removePackageResponse;
    var packagesArray = sessionData.packagesArray;
    if (removePackageResponse == 'Yes')
        packagesArray.length = packagesArray.length - 1
    sessionData.packagesArray = packagesArray;
    sessionData.packageCount = packagesArray.length;
    sessionData.packageNumber = packagesArray.length + 1;
    res.redirect('add-another-package');
})

/**
 * Add Item Container Routing
 */

router.post('/add-items/containers/add-another-container-route', function (req, res) {
    var sessionData = req.session.data;
    var containersArray = sessionData.containersArray || [];
    var container = {
        "id": containersArray.length + 1,
        "number": sessionData.containerNumber,
    }
    containersArray.push(container);
    sessionData.containersArray = containersArray;
    sessionData.containerCount = containersArray.length;
    res.redirect('add-another-container');
})

router.post('/add-items/containers/delete-container', function (req, res) {
    var sessionData = req.session.data;
    let removeContainerResponse = sessionData.removeContainerResponse;
    var containersArray = sessionData.containersArray;
    if (removeContainerResponse == 'Yes')
        containersArray.length = containersArray.length - 1
    sessionData.containersArray = containersArray;
    sessionData.containerCount = containersArray.length;
    res.redirect('add-another-container');
})

router.post('/add-items/containers/add-another-container', function (req, res) {
    var sessionData = req.session.data;
    let addAnotherContainer = sessionData.addAnotherContainer;
    if (addAnotherContainer == 'Yes')
        res.redirect('container-number');
    else
        res.redirect('../special-mentions/add-additional-information');
})

/*
    Add items

    Special mentions
*/

router.post('/add-items/special-mentions/add-special-mention', function (req, res) {
    var sessionData = req.session.data;
    let addSpecialMention = sessionData.addSpecialMention;
    if (addSpecialMention == 'Yes') {
        res.redirect('special-mention-type');
    } else {
        res.redirect('../documents/add-documents');
    }
})

router.post('/add-items/special-mentions/special-mention-type', function (req, res) {
    res.redirect('additional-information');
});

// router.post('/add-items/special-mentions/add-additional-information', function (req, res) {
//     var sessionData = req.session.data;
//     let addAdditionalInformation = sessionData.addAdditionalInformation;
//     let specialMentionType = sessionData.specialMentionType;

//     if (addAdditionalInformation == 'Yes') {
//         res.redirect('additional-information');
//     } else {

//         if ((specialMentionType == '(DG1) Export subject to duties' || specialMentionType == '(DG0) Export subjection to restriction')) {
//             res.redirect('export-country');
//         } else {
//             req.url = '/add-items/special-mentions/added-special-mentions-route';
//             return router.handle(req, res);
//         }

//     }
// })

// router.post('/add-items/special-mentions/additional-information', function (req, res) {
//     var sessionData = req.session.data;
//     let specialMentionType = sessionData.specialMentionType;
//     if ((specialMentionType == '(DG1) Export subject to duties' || specialMentionType == '(DG0) Export subjection to restriction')) {
//         res.redirect('export-country');
//     } else {
//         req.url = '/add-items/special-mentions/added-special-mentions-route';
//         return router.handle(req, res);
//     }
// })

// router.post('/add-items/special-mentions/export-country', function (req, res) {
//     res.redirect('added-special-mentions');
// });



router.post('/add-items/special-mentions/add-special-mention-route', function (req, res) {
    var sessionData = req.session.data;
    let addedSpecialMentionsResponse = sessionData.addedSpecialMentionsResponse;
    if (addedSpecialMentionsResponse == 'Yes') {
        res.redirect('special-mention-type');
    } else {
        res.redirect('../documents/add-documents');
    }
})

router.post('/add-items/special-mentions/added-special-mentions-route', function (req, res) {
    var sessionData = req.session.data;
    var mentionsArray = sessionData.mentionsArray || [];
    var mention = {
        "id": mentionsArray.length + 1,
        "type": sessionData.specialMentionType,
        "additionalInfo": sessionData.addAdditionalInformation
        // "exportCountry": sessionData.exportCountry
    }
    mentionsArray.push(mention);
    sessionData.mentionsArray = mentionsArray;
    sessionData.mentionCount = mentionsArray.length;
    sessionData.mentionNumber = mentionsArray.length + 1;
    res.redirect('added-special-mentions');
})


router.post('/add-items/special-mentions/delete-special-mention', function (req, res) {
    var sessionData = req.session.data;
    let removeMentionResponse = sessionData.removeMentionResponse;
    var mentionsArray = sessionData.mentionsArray;
    if (removeMentionResponse == 'Yes')
        mentionsArray.length = mentionsArray.length - 1
    sessionData.mentionsArray = mentionsArray;
    sessionData.mentionCount = mentionsArray.length;
    sessionData.mentionNumber = mentionsArray.length + 1;
    res.redirect('added-special-mentions');
})



/**
 * Add Items Documents Routing
 */

router.post('/add-items/documents/add-documents-route', function (req, res) {
    var sessionData = req.session.data;
    let addDocumentsResponse = sessionData.addDocumentsResponse;
    if (addDocumentsResponse == 'Yes') {
        res.redirect('document-type');
    } else {
        var nonEuCtcCountries = sessionData.nonEuCtcCountries || [];
        var declarationType = sessionData.declarationType;
        var dispatchCountry = sessionData.dispatchCountry;
        if (nonEuCtcCountries.includes(dispatchCountry) && declarationType == 'T2')
            res.redirect('../previous-references/reference-type');
        else
            res.redirect('../previous-references/add-administrative-reference');
    }
})

router.post('/add-items/documents/document-type-route', function (req, res) {
    res.redirect('document-reference');
})

router.post('/add-items/documents/document-reference-route', function (req, res) {
    var sessionData = req.session.data;
    var documentsArray = sessionData.documentsArray || [];

    sessionData.documentCount = documentsArray.length + 1;
    res.redirect('add-extra-information');
})

router.post('/add-items/documents/add-extra-info-route', function (req, res) {
    var sessionData = req.session.data;
    let addExtraInfoResponse = sessionData.addExtraInfoResponse;
    if (addExtraInfoResponse == 'Yes') {
        res.redirect('extra-information');
    } else {
        req.url = '/add-items/documents/add-document-info';
        return router.handle(req, res);
    }
})

router.post('/add-items/documents/extra-information-route', function (req, res) {
    req.url = '/add-items/documents/add-document-info';
    return router.handle(req, res);
})

router.post('/add-items/documents/add-document-info', function (req, res) {
    var sessionData = req.session.data;
    var documentsArray = sessionData.documentsArray || [];
    var document = {
        "id": documentsArray.length + 1,
        "type": sessionData.documentTypeResponse,
        "reference": sessionData.documentReference,
        "extraInfo": sessionData.extraInformation
    }
    documentsArray.push(document);
    sessionData.documentsArray = documentsArray;
    sessionData.documentCount = documentsArray.length;
    res.redirect('add-another-document');
})

router.post('/add-items/documents/delete-document', function (req, res) {
    var sessionData = req.session.data;
    let removeDocumentResponse = sessionData.removeDocumentResponse;
    var documentsArray = sessionData.documentsArray;
    if (removeDocumentResponse == 'Yes')
        documentsArray.length = documentsArray.length - 1
    sessionData.documentsArray = documentsArray;
    sessionData.documentCount = documentsArray.length;
    res.redirect('add-another-document');
})

router.post('/add-items/documents/add-another-document-route', function (req, res) {
    var sessionData = req.session.data;
    let addAnotherDocument = sessionData.addAnotherDocument;
    if (addAnotherDocument == 'Yes') {
        res.redirect('document-type');
    } else {
        var nonEuCtcCountries = sessionData.nonEuCtcCountries || [];
        var declarationType = sessionData.declarationType;
        var dispatchCountry = sessionData.dispatchCountry;
        if (nonEuCtcCountries.includes(dispatchCountry) && declarationType == 'T2')
            res.redirect('../previous-references/reference-type');
        else
            res.redirect('../previous-references/add-administrative-reference');
    }
})


/**
 * admin reference routing
 */


router.post('/add-items/check-answers-route', function (req, res) {

    var sessionData = req.session.data;
    //arrays of package/containers etc need to be erased from session for next item
    var packagesArray = sessionData.packagesArray;
    packagesArray = [];
    sessionData.packagesArray = packagesArray;
    sessionData.packageNumber = 1;

    var containersArray = sessionData.containersArray;
    containersArray = [];
    sessionData.containersArray = containersArray;

    var mentionsArray = sessionData.mentionsArray;
    mentionsArray = [];
    sessionData.mentionsArray = mentionsArray;
    sessionData.mentionNumber = 1;

    var documentsArray = sessionData.documentsArray;
    documentsArray = [];
    sessionData.documentsArray = documentsArray;

    var previousDocumentsArray = sessionData.previousDocumentsArray;
    previousDocumentsArray = [];
    sessionData.previousDocumentsArray = previousDocumentsArray;

    var itemsArray = sessionData.itemsArray || [];
    var item = {
        "id": itemsArray.length + 1,
        "itemDescription": sessionData.itemDescription,
        "grossMass": sessionData.grossMass,
        "netMass": sessionData.netMass,
        "code": sessionData.itemCode
    }
    itemsArray.push(item);
    sessionData.itemsArray = itemsArray;
    sessionData.itemsize = itemsArray.length;
    sessionData.itemNumber = itemsArray.length + 1;

    res.redirect('add-items');
})

router.post('/add-items/previous-references/add-admin-reference-route', function (req, res) {
    var sessionData = req.session.data;
    let adminRefResponse = sessionData.adminRefResponse;
    if (adminRefResponse == 'Yes') {
        res.redirect('reference-type');
    } else {
        req.url = '/add-items/security/security-routing';
        return router.handle(req, res);
    }
})

router.post('/add-items/previous-references/previous-document-type-route', function (req, res) {
    res.redirect('previous-reference');
})

router.post('/add-items/previous-references/previous-document-reference-route', function (req, res) {
    res.redirect('add-extra-information');
})

router.post('/add-items/previous-references/add-extra-info-route', function (req, res) {
    var sessionData = req.session.data;
    let addPreviousExtraInfoResponse = sessionData.addPreviousExtraInfoResponse;
    if (addPreviousExtraInfoResponse == 'Yes') {
        res.redirect('extra-information');
    } else {
        req.url = '/add-items/previous-references/add-document-info';
        return router.handle(req, res);
    }
})

router.post('/add-items/previous-references/extra-information-route', function (req, res) {
    req.url = '/add-items/previous-references/add-document-info';
    return router.handle(req, res);
})

router.post('/add-items/previous-references/add-document-info', function (req, res) {
    var sessionData = req.session.data;
    var previousDocumentsArray = sessionData.previousDocumentsArray || [];
    var document = {
        "id": previousDocumentsArray.length + 1,
        "type": sessionData.referenceTypeResponse,
        "reference": sessionData.previousDocumentReference,
        "extraInfo": sessionData.previousExtraInformation
    }
    previousDocumentsArray.push(document);
    sessionData.previousDocumentsArray = previousDocumentsArray;
    sessionData.prevDocCount = previousDocumentsArray.length;
    res.redirect('add-another-document');
})

router.post('/add-items/previous-references/delete-document', function (req, res) {
    var sessionData = req.session.data;
    let previousRemoveDocumentResponse = sessionData.previousRemoveDocumentResponse;
    var previousDocumentsArray = sessionData.previousDocumentsArray;
    if (previousRemoveDocumentResponse == 'Yes')
        previousDocumentsArray.length = previousDocumentsArray.length - 1
    sessionData.previousDocumentsArray = previousDocumentsArray;
    sessionData.prevDocCount = previousDocumentsArray.length;
    res.redirect('add-another-document');
})

router.post('/add-items/previous-references/add-another-document-route', function (req, res) {
    var sessionData = req.session.data;
    let addAnotherDocument = sessionData.addAnotherDocument;
    if (addAnotherDocument == 'Yes') {
        res.redirect('reference-type');
    } else {
        req.url = '/add-items/security/security-routing';
        return router.handle(req, res);
        // res.redirect('../check-answers');
    }
})


/**
 * add item security details routing
 */
router.post('/add-items/security/security-routing', function (req, res) {
    let addSafetySecurityResponse = req.session.data.addSafetySecurityResponse;
    let addPaymentMethodResponse = req.session.data.addPaymentMethodResponse;
    if (addSafetySecurityResponse == 'Yes ') {
        if (addPaymentMethodResponse == 'No')
            res.redirect('../security/transport-charges');
        else {
            req.url = '/add-items/security/commercial-reference-number-routing';
            return router.handle(req, res);
        }
    } else {
        res.redirect('../check-answers');
        // /add-items/item-details/save-item

        /* Does this need to go to save answer route then check your answers?*/
    }
})


router.post('/add-items/security/commercial-reference-number-routing', function (req, res) {
    let addCommercialReferenceResponse = req.session.data.addCommercialReferenceResponse;
    let sameCommercialReferenceResponse = req.session.data.sameCommercialReferenceResponse;
    if (addCommercialReferenceResponse == 'Yes' && sameCommercialReferenceResponse == 'Yes')
        res.redirect('../security/add-dangerous-goods-code');
    else
        res.redirect('../security/commercial-reference-number');
})

router.post('/add-items/security/add-dangerous-goods-code-route', function (req, res) {
    let unGoodsCodeResponse = req.session.data.unGoodsCodeResponse;
    if (unGoodsCodeResponse == 'Yes')
        res.redirect('dangerous-goods-code');
    else {
        req.url = '/add-items/security/security-consignor-routing';
        return router.handle(req, res);
    }
})

router.post('/add-items/security/security-consignor-routing', function (req, res) {
    let securityConsignorResponse = req.session.data.securityConsignorResponse;
    if (securityConsignorResponse == 'No')
        res.redirect('is-consignor-eori-known');
    else {
        req.url = '/add-items/security/security-consignee-routing';
        return router.handle(req, res);
    }
})

router.post('/add-items/security/security-consignee-routing', function (req, res) {
    let securityConsigneeResponse = req.session.data.securityConsigneeResponse;
    if (securityConsigneeResponse == 'No')
        res.redirect('is-consignee-eori-known');
    else {
        res.redirect('../check-answers');
    }
})

router.post('/add-items/security/is-consignor-eori-known-route', function (req, res) {
    let addItemsIsSecurityConsignorEoriKnown = req.session.data.addItemsIsSecurityConsignorEoriKnown;
    if (addItemsIsSecurityConsignorEoriKnown == 'Yes')
        res.redirect('what-is-consignor-eori');
    else {
        res.redirect('consignor-name');
    }
})

router.post('/add-items/security/is-consignee-eori-known-route', function (req, res) {
    let addItemsIsSecurityConsigneeEoriKnown = req.session.data.addItemsIsSecurityConsigneeEoriKnown;
    if (addItemsIsSecurityConsigneeEoriKnown == 'Yes')
        res.redirect('what-is-consignee-eori');
    else {
        res.redirect('consignee-name');
    }
})

router.post('/add-items/security/check-answers-route', function (req, res) {
    res.redirect('../check-answers');
})


/*
    Movement details routing
*/


/*
    Inland mode
    If the user selects 5,50,7,70 or has answered yes to "have you used containers?", take them to nationality at departure
    If the user selects 2,20 take them to "add nationality at departure?"
*/

// router.post('/transport/inland-mode', function (req, res) {

//     let inlandMode = req.session.data.inlandMode;
//     let containersUsed = req.session.data.containersUsed;

//     if ((inlandMode == '(5) Postal Consignment' ||
//         inlandMode == '(50) Postal Consignment' ||
//         inlandMode == '(7) Fixed transport installations' ||
//         inlandMode == '(70) Fixed transport installations' ||
//         (containersUsed == 'Yes ')
//     )) {
//         res.redirect('nationality-at-departure');
//     } else if ((inlandMode == '(2) Rail transport' ||
//         inlandMode == '(20) Rail transport'
//     )) {
//         res.redirect('change-at-border');
//     } else {
//         res.redirect('add-id-at-departure')
//     }

// })

router.post('/transport/inland-mode', function (req, res) {

    let inlandMode = req.session.data.inlandMode;
    let containersUsed = req.session.data.containersUsed;

    if ((inlandMode == '(5) Postal Consignment' ||
        inlandMode == '(50) Postal Consignment' ||
        inlandMode == '(7) Fixed transport installations' ||
        inlandMode == '(70) Fixed transport installations'
    )) {
        res.redirect('change-at-border');

    } else {

        if (containersUsed == 'Yes') {
            res.redirect('add-id-at-departure');
        } else {
            res.redirect('id-at-departure');
            }
        }
})

router.post('/transport/nationality-at-departure-route', function (req, res) {

    let inlandMode = req.session.data.inlandMode;
    let containersUsed = req.session.data.containersUsed;

    if ((inlandMode == '(5) Postal Consignment' ||
        inlandMode == '(50) Postal Consignment' ||
        inlandMode == '(7) Fixed transport installations' ||
        inlandMode == '(70) Fixed transport installations' ||
        inlandMode == '(2) Rail transport' ||
        inlandMode == '(20) Rail transport'
    )) {
        res.redirect('change-at-border');

    } else {

        if (containersUsed == 'Yes') {
            res.redirect('add-nationality-at-departure');
        } else {
            res.redirect('nationality-at-departure');
            }
        }
})


/*
    Add ID at departure
    If the user selects "Yes" to "Add ID at departure?", take them to "What is the ID at departure?"
    If the user selects "No" to "Add ID at departure?", take them to "Add ID at departure later"
*/

router.post('/transport/add-id-at-departure', function (req, res) {

    let addIDAtDeparture = req.session.data.addIDAtDeparture;
//let containersUsed = req.session.data.containersUsed;
    if (addIDAtDeparture == 'Yes') {
        res.redirect('id-at-departure');
    } else {
        res.redirect('add-id-at-departure-later');
    }

})

//ID at departure to change at border
router.post('/transport/id-at-departure', function (req, res) {
    res.redirect('nationality-at-departure');
});

//Add ID at departure later to change at border
// router.post('/transport/add-id-at-departure-later', function (req, res) {
//     res.redirect('nationality-at-departure');
// });

router.post('/transport/add-nationality-at-departure-route', function (req, res) {

    let addNationalityAtDeparture = req.session.data.addNationalityAtDeparture;

    if (addNationalityAtDeparture == 'Yes') {
        res.redirect('nationality-at-departure');
    } else {
        res.redirect('change-at-border');
    }
});

//Nationality at departure to change at border
router.post('/transport/nationality-at-departure', function (req, res) {
    res.redirect('change-at-border');
});

/*
    Change at border
    If the user selects "Yes" to "Do these details change at the border?", take them to "mode at border"
    If the user selects "No" to "Do these details change at the border?", take them to "check your answers"
*/

router.post('/transport/change-at-border', function (req, res) {

    let changeAtBorder = req.session.data.changeAtBorder;

    if (changeAtBorder == 'No') {
        res.redirect('check-your-answers');
    } else {
        res.redirect('mode-at-border');
    }

})

//Check your answers to confirm your employer
router.post('/transport/mode-at-border', function (req, res) {
    res.redirect('id-crossing-border');
});

//Check your answers to confirm your employer
router.post('/transport/id-crossing-border', function (req, res) {
    res.redirect('mode-crossing-border');
});

/* 
    Mode crossing the border
    If the user selects 2,20,5,50,7,70 take them to check your answers
    If the user selects anything else take them to "nationality crossing the border"
*/

router.post('/transport/mode-crossing-border', function (req, res) {

    let modeCrossingBorder = req.session.data.modeCrossingBorder;

    if ((modeCrossingBorder == '(5) Postal Consignment' ||
        modeCrossingBorder == '(50) Postal Consignment' ||
        modeCrossingBorder == '(7) Fixed transport installations' ||
        modeCrossingBorder == '(70) Fixed transport installations' ||
        modeCrossingBorder == '(2) Rail transport' ||
        modeCrossingBorder == '(20) Rail transport'
    )) {
        res.redirect('check-your-answers');
    } else {
        res.redirect('nationality-crossing-border')
    }

})

/* 
    Goods summary routes
*/

//Total packages to total gross mass
router.post('/goods-summary/total-packages', function (req, res) {
    res.redirect('total-gross-mass');
});

/*
    Total gross mass
    If the user selects Yes for "safety and security details", take them to "loading place"
    Else take them to "add customs sub place" (normal) or "authorised location code simplified"
        If the user has selected "normal procedure" take them to "add customs sub place"
        If the user has selected "simplified procedure" take them to "authorised location code"
*/

router.post('/goods-summary/total-gross-mass', function (req, res) {

    let addSafetySecurityResponse = req.session.data.addSafetySecurityResponse;
    let departuresProcedureType = req.session.data.departuresProcedureType;
    let departuresPreLodge = req.session.data.departuresPreLodge;

    if (addSafetySecurityResponse == 'Yes') {
        res.redirect('loading-place');
    } else {

        if (departuresProcedureType == 'Normal' && departuresPreLodge == 'Yes'){
            res.redirect('add-agreed-goods-location');
    
        } else if (departuresProcedureType == 'Normal' && departuresPreLodge == 'No'){
            res.redirect('customs-approved-location');
    
        }    else {
            res.redirect('authorised-location-code');
    }
    }

})



/*
    Mode crossing the border
    If the user selects normal procedure type, take them to "Do you want to add a customs approved location?"
    If the user selects simplified procedure type, take them to "Authorised location code"
*/

router.post('/goods-summary/loading-place', function (req, res) {

    let addSafetySecurityResponse = req.session.data.addSafetySecurityResponse;
    let departuresProcedureType = req.session.data.departuresProcedureType;
    let departuresPreLodge = req.session.data.departuresPreLodge;

    if (departuresProcedureType == 'Normal' && departuresPreLodge == 'Yes'){
        res.redirect('add-agreed-goods-location');

    } else if (departuresProcedureType == 'Normal' && departuresPreLodge == 'No'){
        res.redirect('add-customs-approved-location');

    }    else {
        res.redirect('authorised-location-code');
}

    //else if (departuresProcedureType == 'Normal' && departuresPreLodge == 'No'){
       // res.redirect('add-customs-approved-location');

})

/*
 Guarantee Routing
*/

router.post('/guarantee/add-another-guarantee-route', function (req, res) {
    var sessionData = req.session.data;
    var guaranteeArray = sessionData.guaranteeArray || [];
    var guarantee = {
        "id": guaranteeArray.length + 1,
        "guarantee": sessionData.guaranteeType,
    }
    guaranteeArray.push(guarantee);
    sessionData.guaranteeArray = guaranteeArray;
    sessionData.guaranteeCount = guaranteeArray.length;
    res.redirect('add-another-guarantee');
})

router.post('/guarantee/delete-guarantee', function (req, res) {
    var sessionData = req.session.data;
    let removeGuaranteeResponse = sessionData.removeGuaranteeResponse;
    var guaranteeArray = sessionData.guaranteeArray;
    if (removeGuaranteeResponse == 'Yes')
        guaranteeArray.length = guaranteeArray.length - 1
    sessionData.guaranteeArray = guaranteeArray;
    sessionData.guaranteeCount = guaranteeArray.length;
    res.redirect('add-another-guarantee');
})

router.post('/guarantee/add-another-guarantee', function (req, res) {
    var sessionData = req.session.data;
    let addAnotherGuarantee = sessionData.addAnotherGuarantee;
    if (addAnotherGuarantee == 'Yes')
        res.redirect('guarantee-type');
    else
        res.redirect('../task-list');
})



/**
 * Liability Amount
 */
router.post('/guarantee/check-liability-amount', function (req, res) {
    var sessionData = req.session.data;
    let liabilityAmount = sessionData.liabilityAmount;
    if (String(liabilityAmount).length > 0) {
        sessionData.liabilityDefaultAmount = "";
        res.redirect('access-code');
    } else {
        res.redirect('default-amount');
    }
})




module.exports = router