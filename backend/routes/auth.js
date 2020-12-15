const express = require('express')
const router = express.Router()
const {signup, signin, signout, requiresignin} = require('../controllers/auth')

const {runValidation} = require('../validtors')
const {userSignupValidator, userSigninValidator} = require('../validtors/auth')

router.post('/signup', userSignupValidator, runValidation, signup)

router.post('/signin', userSigninValidator, runValidation, signin)
router.get('/signout', signout)

router.get('/secret', requiresignin, (req, res) => {
    res.json({
        message: 'You have access to secret page'
    })
})

module.exports = router