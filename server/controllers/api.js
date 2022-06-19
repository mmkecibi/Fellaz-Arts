const passport = require('passport');
const userQuery = require('../models/users/q');
const userq = userQuery.Userquery.getInstance();
exports.getPageData = function (req, res, next) {
  (async function () {
    try {
        /*let pool = await cx.getConnection()
        let result1 = await pool.request()
            .query('select * from users')          
        console.dir(result1)*/
        const userId = "704060a0-768c-e911-ad92-d8fc93efaa0a";
        const ress =  await userq.getUser(userId);
       return res.json(ress);
    } catch (err) {
        // ... error checks
    }
})()
};