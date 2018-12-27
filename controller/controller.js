const connection = require('../connection_info/connection'),
      Group      = require('../model/groups');


//my cRUd functions
module.exports = {
    async getAllGroups(req, res, next) {
        const result = await Group.find({})
        if (result){
            console.log(result);
            res.json(result);
        } 
        else res.status(404).send('not found');
    },
    async setGroupScore(req, res, next) {
        const {Name = null, Points = null} = req.body;
        const result = await Group.updateOne({Name},{Points});
        if (result) {
            if (result.nModified !=0){
                console.log('modified');
                res.json({success:true});
            }
            else{
                console.log('no changes made');
                res.json({success:false});
            }
        }
        else res.status(404).send('not found');
    },
    async groupsByScoreAndWin(req, res, next) {
        const {points = null, wins = null} = req.body;
        const result = await Group.find({Points:{$gte:points},W:{$gte:wins}});
        if (result) {
            console.log(result);
            res.json(result);
        }
        else res.status(404).send('not found');
        }
};
