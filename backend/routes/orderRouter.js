import express from 'express'
import {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus, verifyStripe, verifyRazorpay} from '../controllers/orderController.js'
import amdinAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

// Admin feautures
orderRouter.post('/list', amdinAuth, allOrders)
orderRouter.post('/status',amdinAuth, updateStatus)

// Payment feautures
orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/stripe', authUser, placeOrderStripe)
orderRouter.post('/razorpay', authUser, placeOrderRazorpay)

// User feauture 
orderRouter.post('/userorders', authUser, userOrders)


// verify payment
orderRouter.post('/verifyStripe', authUser,verifyStripe )
orderRouter.post('/verifyRazorpay', authUser, verifyRazorpay)

export default orderRouter
