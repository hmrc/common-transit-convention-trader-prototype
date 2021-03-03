module.exports = {
    'directory': 'views/arrivals/version-6',
    'name': 'Arrivals',
    'playlists': [
        {
            'name': 'Border Force main journey',
            'playlist': [
                {'view':'movement-reference'},
                {'view':'where-goods'},
                {'view':'customs-facility'},
                {'view':'border-force-office'},
                {'view':'trader-name'},
                {'view':'trader-eori'},
                {'view':'trader-address'},
                {'view':'place-of-notification-postcode'},
                {'view':'place-notification',               'branchLevel': 1, 'branchStart': true, 'branchEnd': true, 'showParallel': true},
                {'view':'event/something-happened'},
                {'exitTo': ['Event Border Force'],                       'branchLevel': 1, 'branchStart': true, 'branchEnd': true, 'showParallel': true},
                {'view':'check-answers'},
                {'view':'arrival-sent'}
            ]
        }
    ]
}