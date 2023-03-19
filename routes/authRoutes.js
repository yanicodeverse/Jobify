import express from 'express'
const router = express.Router()

import { register, login, userUpdate } from '../controllers/authControllers.js'

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/userUpdate').patch(userUpdate)

export default router