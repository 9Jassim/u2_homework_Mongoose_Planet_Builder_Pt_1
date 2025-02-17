const express = require('express')
const router = express.Router()
const planetsCtrl = require('../controllers/planets')

router.get('/new', planetsCtrl.newPlanet)
router.post('/', planetsCtrl.create)
router.get('/:id', planetsCtrl.show)
router.get('/', planetsCtrl.index)

module.exports = router
