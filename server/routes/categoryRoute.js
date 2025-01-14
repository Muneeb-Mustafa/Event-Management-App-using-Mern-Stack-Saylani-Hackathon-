import express from 'express'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import { createCategory, updateCategory, AllCategories, SingleCategory, DeleteCategory } from '../controllers/categoryController.js';
const router = express.Router()

router.post('/create-category', requireSignIn, isAdmin, createCategory)
router.put('/update-category/:id', requireSignIn, isAdmin, updateCategory)
router.get('/get-category', AllCategories)
router.get('/single-category/:slug', SingleCategory)
router.delete('/delete-category/:id', requireSignIn, isAdmin, DeleteCategory)

export default router;