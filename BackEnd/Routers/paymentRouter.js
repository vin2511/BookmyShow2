const express = require('express');
const PaymentRouter= express.Router();
const {getPayment, postPayment, updatePayment, deletePayment, getPaymentById, getPaymentByBookId, getPaymentByUserId }= require('../Controller/tb_payments')

PaymentRouter.get('/viewpayments',getPayment)
PaymentRouter.post('/addpayments',postPayment)
PaymentRouter.put('/updatepayments/:payment_id',updatePayment)
PaymentRouter.delete('/deletepayments/:payment_id',deletePayment)
PaymentRouter.get('/viewpaymentsById/:payment_id',getPaymentById)
PaymentRouter.get('/viewpaymentsByBookId/:booking_id',getPaymentByBookId)
PaymentRouter.get('/viewpaymentsByUserId/:user_id',getPaymentByUserId)
