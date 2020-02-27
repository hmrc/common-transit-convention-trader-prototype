module.exports = {
    'directory': 'views/arrivals/version-3',
    'name': 'Transhipments',
    'parent': {
        'name': 'Arrival notification',
        'url': 'arrivals'
    },
    'playlists': [
        {
            'name': 'Authorised Consignee Transhipment Container',
            'parent': {
                'name': 'Arrival notification',
                'url': 'arrivals'
            },
            'playlist': [
                {'view': 'event/event-1/new-container-number'},
                {'view': 'event/event-1/container-list', 'loopBack': true},
                {'view': 'event/event-1/check-event-answers'},
                {'view': 'event/event-1/event-list'}
            ]
        },
        {
            'name': 'Border Force Transhipment Container',
            'parent': {
                'name': 'Arrival notification',
                'url': 'arrivals'
            },
            'playlist': [
                {'view': 'event/event-1/new-container-number'},
                {'view': 'event/event-1/container-list', 'loopBack': true},
                {'view': 'event/event-1/seals-changed'},
                {'view': 'event/event-1/new-seal-number', 'branchLevel': 1, 'branchStart': true, 'showParallel': true},
                {'view': 'event/event-1/seal-list', 'branchLevel': 1, 'branchEnd': true, 'showParallel': true, 'loopBack': true},
                {'view': 'event/event-1/check-event-answers'},
                {'view': 'event/event-1/event-list'}
            ]
        },
        {
            'name': 'Authorised Consignee Transhipment Vehicle',
            'parent': {
                'name': 'Arrival notification',
                'url': 'arrivals'
            },
            'playlist': [
                {'view': 'event/event-1/vehicle-reference'},
                {'view': 'event/event-1/vehicle-country'},
                {'view': 'event/event-1/check-event-answers'},
                {'view': 'event/event-1/event-list'}
            ]
        },
        {
            'name': 'Border Force Transhipment Vehicle',
            'parent': {
                'name': 'Arrival notification',
                'url': 'arrivals'
            },
            'playlist': [
                {'view': 'event/event-1/vehicle-reference'},
                {'view': 'event/event-1/vehicle-country'},
                {'view': 'event/event-1/seals-changed'},
                {'view': 'event/event-1/new-seal-number', 'branchLevel': 1, 'branchStart': true, 'showParallel': true},
                {'view': 'event/event-1/seal-list', 'branchLevel': 1, 'branchEnd': true, 'showParallel': true, 'loopBack': true},
                {'view': 'event/event-1/check-event-answers'},
                {'view': 'event/event-1/event-list'}
            ]
        },
        {
            'name': 'Authorised Consignee Border Force Transhipment Both',
            'parent': {
                'name': 'Arrival notification',
                'url': 'arrivals'
            },
            'playlist': [
                {'view': 'event/event-1/new-container-number'},
                {'view': 'event/event-1/container-list', 'loopBack': true},
                {'exitTo': ['#Border Force Transhipment Vehicle', '#Authorised Consignee Transhipment Vehicle']}
            ]
        }
    ]
}