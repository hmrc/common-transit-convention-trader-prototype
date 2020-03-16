module.exports = {
    'directory': 'views/unloading-remarks/version-5',
    'playlists': [
        {
            'name': 'Main journey',
            'playlist': [
                {'view':'seals-included/all-goods-unloaded'},
                {'view':'seals-included/date-goods-unloaded'},
                {'view':'seals-included/can-seals-be-read'},
                {'view':'seals-included/are-any-seals-broken'},
                {'view':'seals-included/unloading-remarks'},
                {'exitTo': ['#Change seal','#Add new seal', '#Change vehicle name, registration or reference', '#Change vehicle country registration', '#Change item']},
                {'view':'seals-included/anything-else-to-report'},
                {'view':'seals-included/changes-to-report', 'branchLevel': 1, 'branchStart': true, 'branchEnd': true, 'showParallel': true},
                {'view':'seals-included/check-your-answers'},
                {'view':'seals-included/confirmation'}
            ]
        },
        {
            'name': 'Change seal',
            'playlist': [
                {'view':'seals-included/changes-to-item'}
            ]
        },
        {
            'name': 'Add new seal',
            'playlist': [
                {'view':'seals-included/add-seal-number'}
            ]
        },
        {
            'name': 'Change vehicle name, registration or reference',
            'playlist': [
                {'view':'seals-included/new-vehicle-id'}
            ]
        },
        {
            'name': 'Change vehicle country registration',
            'playlist': [
                {'view':'seals-included/new-vehicle-country'}
            ]
        },
        {
            'name': 'Change item',
            'playlist': [
                {'view':'seals-included/new-total-gross-mass'}
            ]
        }
    ]
}