import express from "express";
import { post, get, put, deleteIt } from '../controllers/user.controller.js';

export const router = express.Router();
router.post('/', post);
router.get('/', get);
router.put('/', put);
router.delete('/', deleteIt);
