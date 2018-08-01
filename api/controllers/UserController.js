/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

let Controller={
    Test: async function (req, res) {
        console.log('abcdefg');
        return res.ok({ result: 'success' });
    },
    Hello:async function(req,res){
        return res.ok({ result: 'Hello' });
    }
}
module.exports = Controller;

