const MAX_USERS = 100;
const DEFAULT_LANGUAGE = 'English';
const COMPANY_NAME = 'OTech Group';

function createUser(username) {
    if (getCurrentUserCount() < MAX_USERS) {
        // Create user logic here
        console.log(`Creating user ${username} with default language ${DEFAULT_LANGUAGE} `)
    } else {
        console.log(`Cannot create user ${username} Because ${COMPANY_NAME} has reached the maximum user limit.`)
    }
}

createUser('John');

function getCurrentUserCount() {
    // Get current user count logic here
    return 101;
}