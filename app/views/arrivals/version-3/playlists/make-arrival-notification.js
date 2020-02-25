module.exports = {
    'directory': 'views/arrivals/version-3',
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
                {'view':'place-notification',                   'branchLevel': 1, 'branchStart': true, 'branchEnd': true, 'showParallel': true},
                {'view':'event/something-happened'},
                {'exitTo': ['Event'],                           'branchLevel': 1, 'branchStart': true, 'branchEnd': true, 'showParallel': true},
                {'view':'check-answers'},
                {'view':'arrival-sent'}
            ]
        },
        {
            'name': 'Event',
            'playlist': [
                {'view':'event/event-1/event-country'},
                {'view':'event/event-1/event-place'},
                {'view':'event/event-1/event-report'},
                {'view':'event/event-1/change-vehicle'},

                {'view':'event/event-1/new-transport-type'},
                {'view':'event/event-1/new-container-number'},
                {'view':'event/event-1/container-list'},
                {'view':'event/event-1/vehicle-reference'},
                {'view':'event/event-1/vehicle-country'},
                {'view':'event/event-1/seals-changed'},
                {'view':'event/event-1/new-seal-number'},
                {'view':'event/event-1/seal-list'},
                {'view':'event/event-1/check-event-answers'},
                {'view':'event/event-1/event-list'}
            ]
        },
        {
            'name': 'Event not reported, AuthorisedConsignee',
            'playlist': [
                {'view':'event/event-1/event-report'},
                {'view':'event/event-1/change-vehicle'}, // yes new-transport-type || no incident-information
                {'view':'event/event-1/new-transport-type', 'branchLevel': 1, 'branchStart': true, 'showParallel': true},
                {'exitTo': ['Transhipment'], 'branchLevel': 1, 'branchEnd': true, 'skip': true},
                {'view':'event/event-1/incident-information'}, // AuthorisedConsignee check-event-answers || BorderForce seals-changed
                {'view':'event/event-1/check-event-answers'},
                {'view':'event/event-1/event-list'}
            ]
        },
        {
            'name': 'Event reported',
            'playlist': [
                {'view':'event/event-1/event-report'},
                {'view':'event/event-1/change-vehicle'},
                {'view':'event/event-1/new-transport-type'},
                {'view':'event/event-1/new-container-number'},
                {'view':'event/event-1/container-list'},
                {'view':'event/event-1/vehicle-reference'},
                {'view':'event/event-1/vehicle-country'},
                {'view':'event/event-1/seals-changed'},
                {'view':'event/event-1/new-seal-number'},
                {'view':'event/event-1/seal-list'},
                {'view':'event/event-1/check-event-answers'},
                {'view':'event/event-1/event-list'}
            ]
        }
    ]
}