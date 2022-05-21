const express = require('express') //common js syntax
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal, }  = require('../controllers/goalController') // pulls functions from goalController

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)




module.exports = router 