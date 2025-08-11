import express from 'express'
import {adminLogin, adminLogout, adminsiginup} from '../controllers/admin.controller.js';

const route = express.Router();

route.post('/siginup', adminsiginup)
route.post('/login', adminLogin)
route.post('/logout', adminLogout)

export default route