const initialState = {
    mails: [{
            "from": "mhallatt0@walmart.com",
            "to": "cziem0@surveymonkey.com",
            "subject": "Office Assistant IV",
            "body": "condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis",
            "date": "3/31/2017",
            "isReaded": false,
            "avatar": "https://robohash.org/dignissimosetsuscipit.jpg?size=50x50&set=set1",
            "tag": "Indigo",
            "attachements": [{
                "file": "",
                "name": "ut_nulla_sed.jpeg"
            }]
        }],
    visibilityFilter: "INBOX"
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CONTACTS_REQUEST:
            return {...state, isFetching: true};
        default:
            return state;
    }
}
