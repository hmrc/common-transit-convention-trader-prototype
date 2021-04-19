module.exports = {
    'directory': 'views/arrivals/version-6',
    'name': 'Arrivals',
    'playlists': [
        {
            'name': 'Main journey',
            'playlist': [
                {'view':'movement-reference'},
                {'view':'where-goods'},
                {'view':'customs-facility',                 'branchLevel': 1, 'branchStart': true, 'showParallel': true},
                {'view':'border-force-office',              'branchLevel': 1, 'branchEnd': true, 'skip': true},
                {'view':'authorised-location-code'},
                {'view':'trader-name'},
                {'view':'trader-eori'},
                {'view':'trader-address'},
                {'view':'place-of-notification-postcode'},
                {'view':'place-notification',               'branchLevel': 1, 'branchStart': true, 'branchEnd': true, 'showParallel': true},
                {'view':'event/something-happened'},
                {'exitTo': ['Event Authorised Consignee', 'Event Border Force'],                       'branchLevel': 1, 'branchStart': true, 'branchEnd': true, 'showParallel': true},
                {'view':'check-answers'},
                {'view':'arrival-sent'}
            ]
        }//,
        // {
        //     'name': 'Event Authorised Consignee',
        //     'playlist': [
        //         {'view':'event/event-1/event-country'},
        //         {'view':'event/event-1/event-place'},
        //         {'view':'event/event-1/event-report'},
        //         {'view':'event/event-1/change-vehicle'}, // yes new-transport-type || no incident-information
        //         {'view':'event/event-1/new-transport-type', 'branchLevel': 1, 'branchStart': true, 'showParallel': true},
        //         {'exitTo': ['Authorised Consignee Transhipment Container', 'Authorised Consignee Transhipment Vehicle', 'Authorised Consignee Border Force Transhipment Both'], 'branchLevel': 1, 'branchEnd': true, 'skip': true},
        //         {'view':'event/event-1/incident-information'}, // AuthorisedConsignee check-event-answers || BorderForce seals-changed
        //         {'view':'event/event-1/check-event-answers'},
        //         {'view':'event/event-1/event-list'}
        //     ]
        // },
        // {
        //     'name': 'Event BorderForce',
        //     'playlist': [
        //         {'view':'event/event-1/event-country'},
        //         {'view':'event/event-1/event-place'},
        //         {'view':'event/event-1/event-report'},
        //         {'view':'event/event-1/change-vehicle'}, // yes new-transport-type || no seals-changed
        //         {'view':'event/event-1/new-transport-type', 'branchLevel': 1, 'branchStart': true, 'showParallel': true},
        //         {'exitTo': ['Border Force Transhipment Container', 'Border Force Transhipment Vehicle', 'Authorised Consignee Border Force Transhipment Both'], 'branchLevel': 1, 'branchEnd': true, 'showParallel': true},

        //         {'view': 'event/event-1/seals-changed'},
        //         {'view': 'event/event-1/new-seal-number', 'branchLevel': 1, 'branchStart': true, 'showParallel': true},
        //         {'view': 'event/event-1/seal-list', 'branchLevel': 1, 'branchEnd': true, 'showParallel': true, 'loopBack': true},
        //         {'view':'event/event-1/check-event-answers'},
        //         {'view':'event/event-1/event-list'}
        //     ]
        // },
        // {
        //     'name': 'Border Force Transhipment Container',
        //     'playlist': [
        //         {'view': 'event/event-1/new-container-number'},
        //         {'view': 'event/event-1/container-list', 'loopBack': true},
        //         {'view': 'event/event-1/seals-changed'},
        //         {'view': 'event/event-1/new-seal-number', 'branchLevel': 1, 'branchStart': true, 'showParallel': true},
        //         {'view': 'event/event-1/seal-list', 'branchLevel': 1, 'branchEnd': true, 'showParallel': true, 'loopBack': true},
        //         {'view': 'event/event-1/check-event-answers'},
        //         {'view': 'event/event-1/event-list'}
        //     ]
        // },
        // {
        //     'name': 'Authorised Consignee Transhipment Container',
        //     'playlist': [
        //         {'view': 'event/event-1/new-container-number'},
        //         {'view': 'event/event-1/container-list', 'loopBack': true},
        //         {'view': 'event/event-1/check-event-answers'},
        //         {'view': 'event/event-1/event-list'}
        //     ]
        // },
        // {
        //     'name': 'Authorised Consignee Border Force Transhipment Both',
        //     'playlist': [
        //         {'view': 'event/event-1/new-container-number'},
        //         {'view': 'event/event-1/container-list', 'loopBack': true},
        //         {'exitTo': ['Border Force Transhipment Vehicle', 'Authorised Consignee Transhipment Vehicle']}
        //     ]
        // },
        // {
        //     'name': 'Border Force Transhipment Vehicle',
        //     'playlist': [
        //         {'view': 'event/event-1/vehicle-reference'},
        //         {'view': 'event/event-1/vehicle-country'},
        //         {'view': 'event/event-1/seals-changed'},
        //         {'view': 'event/event-1/new-seal-number', 'branchLevel': 1, 'branchStart': true, 'showParallel': true},
        //         {'view': 'event/event-1/seal-list', 'branchLevel': 1, 'branchEnd': true, 'showParallel': true, 'loopBack': true},
        //         {'view': 'event/event-1/check-event-answers'},
        //         {'view': 'event/event-1/event-list'}
        //     ]
        // },
        // {
        //     'name': 'Authorised Consignee Transhipment Vehicle',
        //     'playlist': [
        //         {'view': 'event/event-1/vehicle-reference'},
        //         {'view': 'event/event-1/vehicle-country'},
        //         {'view': 'event/event-1/check-event-answers'},
        //         {'view': 'event/event-1/event-list'}
        //     ]
        // }
    ]
}