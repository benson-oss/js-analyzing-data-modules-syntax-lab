

require("datejs");

function combineUsers(...args) {
    const combinedObject = {
        users: []
    };

    for (const usernames of args) {

        combinedObject.users = [
            ...combinedObject.users,
            ...usernames
        ];

    }

    combinedObject.merge_date = Date.today().toString("M/d/yyyy");

    return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};