const express = require('express');
const session = require('express-session');
const router = express.Router()

// Add your routes here - above the module.exports line


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
    let securityVal = req.session.data.securityProcess;
    if (securityVal == 'Yes') {
        res.redirect('arrival-times-at-office-of-transit');
    } else {
        res.redirect('added-transit-offices');
    }
})


/*
    Add items

    item details
*/

router.post('/add-items/all-items-belong-to-trader', function(req, res) {
    res.redirect('item-details/item-description');
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

router.post('/add-items/item-details/add-net-mass', function (req, res) {
    var sessionData = req.session.data;
    let netMassResponse = sessionData.netMassResponse;
    if (netMassResponse == 'Yes') {
        res.redirect('total-net-mass');
    } else {
        sessionData.netMass = '';
        res.redirect('item-given-commodity-code');
    }
})

router.post('/add-items/item-details/item-given-commodity-code', function (req, res) {
    var sessionData = req.session.data;
    let commodityCodeResponse = sessionData.commodityCodeResponse;
    if (commodityCodeResponse == 'Yes') {
        res.redirect('commodity-code');
    } else {
        sessionData.commodityCodeResponse='';
        // res.redirect('check-answers');
        req.url='/add-items/item-details/check-answers';
        return router.handle(req, res)
    }
})

//req.url='/add-items/item-details/save-item';

router.post('/add-items/item-details/commodity-code', function(req, res) {
    res.redirect('check-answers');
  });

/*
    If all items belong to trader = yes, go to type of package
    If all items belong to trader = no, go to add consignee
*/

router.post('/add-items/item-details/add-net-mass', function (req, res) {
    var sessionData = req.session.data;
    let netMassResponse = sessionData.netMassResponse;
    if (netMassResponse == 'Yes') {
        res.redirect('total-net-mass');
    } else {
        sessionData.netMass = '';
        res.redirect('item-given-commodity-code');
    }
})

router.post('/add-items/item-details/check-answers', function (req, res) {
    var sessionData=req.session.data;
    let belongToTrader = sessionData.belongToTrader;
    if (belongToTrader == 'Yes') {
        res.redirect('../packages/package-type');
    } else {
        // req.url='/add-items/item-details/add-consignee';
        res.redirect('../trader-details/add-consignee');
    }
})

router.post('/add-items/item-details/save-item', function (req, res) {
    var sessionData = req.session.data;
    var itemsArray = sessionData.itemsArray || [];
    var item = {
        "id": itemsArray.length,
        "desciption": sessionData.itemdescription,
        "grossMass": sessionData.grossMass,
        "netMass": sessionData.netMass,
        "code": sessionData.itemcode
    }
    itemsArray.push(item);
    sessionData.itemsArray = itemsArray;
    sessionData.itemsize = itemsArray.length;
    sessionData.itemNumber = itemsArray.length + 1;
    res.redirect('../add-items');
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

/*
    Add items

    Special mentions
*/

router.post('/add-items/special-mentions/add-special-mention', function (req, res) {
    var sessionData=req.session.data;
    let addSpecialMention = sessionData.addSpecialMention;
    if (addSpecialMention == 'Yes') {
        res.redirect('special-mention-type');
    } else {
        sessionData.netMass='';
        res.redirect('../documents/add-documents');
    }
})

router.post('/add-items/special-mentions/special-mention-type', function(req, res) {
    res.redirect('add-additional-information');
  });

router.post('/add-items/special-mentions/add-additional-information', function (req, res) {
    var sessionData=req.session.data;
    let addAdditionalInformation = sessionData.addAdditionalInformation;
    let specialMentionType = sessionData.specialMentionType;

    if (addAdditionalInformation == 'Yes') {
        res.redirect('additional-information');
    } else {

        if ((specialMentionType == '(DG1) Export subject to duties' || specialMentionType == '(DG0) Export subjection to restriction')) {
        res.redirect('export-country');
        } else {
            sessionData.netMass='';
            res.redirect('added-special-mentions');
        }

    }
})

router.post('/add-items/special-mentions/additional-information', function (req, res) {
    var sessionData=req.session.data;
    let specialMentionType = sessionData.specialMentionType;
    if ((specialMentionType == '(DG1) Export subject to duties' || specialMentionType == '(DG0) Export subjection to restriction')) {
        res.redirect('export-country');
    } else {
        sessionData.netMass='';
        res.redirect('added-special-mentions');
    }
})

router.post('/add-items/special-mentions/export-country', function(req, res) {
    res.redirect('added-special-mentions');
  });



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
        "id": packagesArray.length,
        "type": sessionData.packageTypeResponse,
        "packageNumbers": sessionData.packageNumbers,
        "itemPieces": sessionData.itemPieces,
        "mark": sessionData.itemMark
    }
    packagesArray.push(package);
    sessionData.packagesArray = packagesArray;
    res.redirect('add-another-package');
})

router.post('/add-items/packages/add-another-package', function (req, res) {
    var sessionData=req.session.data;
    let addAnotherPackage = sessionData.addAnotherPackage;
    let containersUsed = sessionData.containersUsed;

    if (addAnotherPackage == 'Yes') {
        res.redirect('package-type');
    } else {

        if (containersUsed == 'Yes') {
            res.redirect('../containers/container-number');
            } else {
                sessionData.netMass='';
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
    res.redirect('add-another-package');
})


/**
 * Item Documents Routing
 */

router.post('/add-items/documents/add-documents-route', function (req, res) {
    var sessionData = req.session.data;
    let addDocumentsResponse = sessionData.addDocumentsResponse;
    if (addDocumentsResponse == 'Yes') {
        res.redirect('document-type');
    } else {
        res.redirect('../previous-references/add-administrative-reference');
    }
})

router.post('/add-items/documents/document-type-route', function (req, res) {
    res.redirect('document-reference');
})

router.post('/add-items/documents/document-reference-route', function (req, res) {
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
        "id": documentsArray.length,
        "type": sessionData.documentTypeResponse,
        "reference": sessionData.documentReference,
        "extraInfo": sessionData.extraInformation
    }
    documentsArray.push(document);
    sessionData.documentsArray = documentsArray;
    res.redirect('add-another-document');
})

router.post('/add-items/documents/delete-document', function (req, res) {
    var sessionData = req.session.data;
    let removeDocumentResponse = sessionData.removeDocumentResponse;
    var documentsArray = sessionData.documentsArray;
    if (removeDocumentResponse == 'Yes')
        documentsArray.length = documentsArray.length - 1
    sessionData.documentsArray = documentsArray;
    res.redirect('add-another-document');
})

router.post('/add-items/documents/add-another-document', function (req, res) {
    var sessionData = req.session.data;
    let addAnotherDocument = sessionData.addAnotherDocument;
    if (addAnotherDocument == 'Yes') {
        res.redirect('document-type');
    } else {
        res.redirect('../add-items');
    }
})


/**
 * admin reference routing
 */

router.post('/add-items/previous-references/add-admin-reference-route', function (req, res) {
    var sessionData = req.session.data;
    let adminRefResponse = sessionData.adminRefResponse;
    if (adminRefResponse == 'Yes') {
        res.redirect('reference-type');
    } else {
        res.redirect('../security/sample');
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
        "id": previousDocumentsArray.length,
        "type": sessionData.referenceTypeResponse,
        "reference": sessionData.previousDocumentReference,
        "extraInfo": sessionData.previousExtraInformation
    }
    previousDocumentsArray.push(document);
    sessionData.previousDocumentsArray = previousDocumentsArray;
    res.redirect('add-another-document');
})

router.post('/add-items/previous-references/delete-document', function (req, res) {
    var sessionData = req.session.data;
    let previousRemoveDocumentResponse = sessionData.previousRemoveDocumentResponse;
    var previousDocumentsArray = sessionData.previousDocumentsArray;
    if (previousRemoveDocumentResponse == 'Yes')
        previousDocumentsArray.length = previousDocumentsArray.length - 1
    sessionData.previousDocumentsArray = previousDocumentsArray;
    res.redirect('add-another-document');
})


/*
    Movement details routing
*/



/*
    Inland mode
    If the user selects 5,50,7,70 or has answered yes to "have you used containers?", take them to nationality at departure
    If the user selects 2,20 take them to "add nationality at departure?"
*/

router.post('/transport/inland-mode', function (req, res) {

    let inlandMode = req.session.data.inlandMode;
    let containersUsed = req.session.data.containersUsed;

    if ((inlandMode == '(5) Postal Consignment' ||
        inlandMode == '(50) Postal Consignment' ||
        inlandMode == '(7) Fixed transport installations' ||
        inlandMode == '(70) Fixed transport installations' ||
        (containersUsed == 'Yes ')
    )) {
        res.redirect('nationality-at-departure');
    } else if ((inlandMode == '(2) Rail transport' ||
        inlandMode == '(20) Rail transport'
    )) {
        res.redirect('change-at-border');
    } else {
        res.redirect('add-id-at-departure')
    }

})

/*
    Add ID at departure
    If the user selects "Yes" to "Add ID at departure?", take them to "What is the ID at departure?"
    If the user selects "No" to "Add ID at departure?", take them to "Add ID at departure later"
*/

router.post('/transport/add-id-at-departure', function (req, res) {

    let addIDAtDeparture = req.session.data.addIDAtDeparture;

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
router.post('/transport/add-id-at-departure-later', function (req, res) {
    res.redirect('nationality-at-departure');
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

    let securityProcess = req.session.data.securityProcess;
    let departuresProcedureType = req.session.data.departuresProcedureType;

    if (securityProcess == 'Yes') {
        res.redirect('loading-place');
    } else {

        if (departuresProcedureType == 'Normal') {
            res.redirect('add-customs-approved-location');
        } else {
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

    let departuresProcedureType = req.session.data.departuresProcedureType;

    if (departuresProcedureType == 'Normal') {
        res.redirect('add-customs-approved-location');
    } else {
        res.redirect('authorised-location-code');
    }

})

/**
 * Liability Amount
 */
router.post('/guarantee/check-libaility-amount', function (req, res) {
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