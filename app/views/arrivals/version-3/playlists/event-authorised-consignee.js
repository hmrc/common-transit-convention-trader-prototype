module.exports = {
    'directory': 'views/arrivals/version-3',
    'playlists': [
        {
            'name': 'Event Authorised Consignee',
            'parent': {
                'name': 'Arrival notification',
                'url': 'arrivals'
            },
            'playlist': [
                {'view':'event/event-1/event-country'},
                {'view':'event/event-1/event-place'},
                {'view':'event/event-1/event-report'},
                {'view':'event/event-1/change-vehicle'}, // yes new-transport-type || no incident-information
                {'view':'event/event-1/new-transport-type', 'branchLevel': 1, 'branchStart': true, 'showParallel': true},
                {'exitTo': ['Transhipments'], 'branchLevel': 1, 'branchEnd': true, 'skip': true},
                {'view':'event/event-1/incident-information'}, // AuthorisedConsignee check-event-answers || BorderForce seals-changed
                {'view':'event/event-1/check-event-answers'},
                {'view':'event/event-1/event-list'}
            ]
        }
    ]
}