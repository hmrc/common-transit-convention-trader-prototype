module.exports = {
    'directory': 'views/arrivals/version-6',
    'playlists': [
        {
            'name': 'Event Border Force',
            'parent': {
                'name': 'Arrival notification',
                'url': 'arrivals'
            },
            'playlist': [
                {'view':'event/event-1/event-country'},
                {'view':'event/event-1/event-place'},
                {'view':'event/event-1/event-report'},
                {'view':'event/event-1/change-vehicle'}, // yes new-transport-type || no seals-changed
                {'view':'event/event-1/new-transport-type', 'branchLevel': 1, 'branchStart': true, 'showParallel': true},
                {'exitTo': ['Transhipments'], 'branchLevel': 1, 'branchEnd': true, 'showParallel': true},

                {'view': 'event/event-1/seals-changed'},
                {'view': 'event/event-1/new-seal-number', 'branchLevel': 1, 'branchStart': true, 'showParallel': true},
                {'view': 'event/event-1/seal-list', 'branchLevel': 1, 'branchEnd': true, 'showParallel': true, 'loopBack': true},
                {'view':'event/event-1/check-event-answers'},
                {'view':'event/event-1/event-list'}
            ]
        }
    ]
}