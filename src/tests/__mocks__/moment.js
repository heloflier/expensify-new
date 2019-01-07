// import moment from 'moment' WILL NOT WORK BECAUSE IT WILL SEARCH FOR THE
// MOCKED MOMENT, NOT THE ORIGINAL ONE, INTRODUCING AN INFINITE RECURSION 
// (STACK TRACE ERROR)

const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
};

