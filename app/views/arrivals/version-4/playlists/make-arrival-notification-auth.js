module.exports = {
    'directory': 'views/arrivals/version-3',
    'name': 'Arrivals',
    'playlists': [
        {
            'name': 'Authorised Consignee main journey',
            'playlist': [
                {'view':'movement-reference'},
                {'view':'where-goods'},
                {'view':'authorised-location-code'},
                {'view':'consignee-name'},
                {'view':'consignee-eori-to-use '},
                    {'view':'consignee-eori',               'branchLevel': 1, 'branchStart': true, 'branchEnd': true, 'showParallel': true},
                {'view':'consignee-address'},
                {'view':'event/something-happened-simplified'},
                    {'exitTo': ['Event Authorised Consignee'],  'branchLevel': 1, 'branchStart': true, 'showParallel': true},
                    {'view':'check-answers',                    'branchLevel': 1, 'branchEnd': true, 'showParallel': true, 'skip': true},
                {'view':'check-answers-no-events'},
                {'view':'arrival-sent'}
            ]
        }

    ]
}