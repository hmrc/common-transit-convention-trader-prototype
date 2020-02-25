module.exports = {
    'directory': 'views/unloading-remarks/version-4',
    'playlists': [
        {
            'name': 'Main journey',
            'playlist': [
                {'view':'seals-included/all-goods-unloaded'},
                {'view':'seals-included/date-goods-unloaded'},
                {'view':'seals-included/name-reference-registration'},
                {'view':'seals-included/new-vehicle-id',                'branchLevel': 1, 'branchStart': true, 'branchEnd': true, 'showParallel': true},
                {'view':'seals-included/vehicle-country'},
                {'view':'seals-included/new-vehicle-country',           'branchLevel': 1, 'branchStart': true, 'branchEnd': true, 'showParallel': true},
                {'view':'seals-included/gross-mass'},
                {'view':'seals-included/new-total-gross-mass',          'branchLevel': 1, 'branchStart': true, 'branchEnd': true, 'showParallel': true},
                {'view':'seals-included/change-add-seal-numbers'},
                {'exitTo': ['Change seal','Add new seal']},
                {'view':'seals-included/can-seals-be-read'},
                {'view':'seals-included/are-any-seals-broken'},
                {'view':'seals-included/seal-damage-details',           'branchLevel': 1, 'branchStart': true, 'branchEnd': true, 'showParallel': true},
                {'view':'seals-included/change-add-declared-items'},
                {'exitTo': ['Change item']},
                {'view':'seals-included/check-your-answers'},
                {'view':'seals-included/confirmation'}
            ]
        },
        {
            'name': 'Change seal',
            'playlist': [
                {'view':'seals-included/change-seal-number'}
            ]
        },
        {
            'name': 'Add new seal',
            'playlist': [
                {'view':'seals-included/add-seal-number'}
            ]
        }
        ,
        {
            'name': 'Change item',
            'playlist': [
                {'view':'seals-included/change-item/declared-information'},
                {'view':'seals-included/change-item/packages'},
                {'view':'seals-included/change-item/container-numbers'},
                {'view':'seals-included/change-item/documents'},
                {'view':'seals-included/change-item/anything-else-to-report'},
                {'view':'seals-included/change-item/changes-to-report'},
                {'view':'seals-included/change-item/check-your-answers'}
            ]
        }
    ]
}