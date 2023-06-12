import express  from "express";
import { post, get, put, deleteIt } from '../controllers/comment.controller.js';

export const commentRouter = express.Router();

commentRouter.route('/comment')
    .get((req, res, next) => {
        res.send('GET a comment!');
        next()
    })
    .post((req, res) => {
        res.send('Post a comment!');
    })
    .put((req, res, next) => {
        res.send('PUT a comment!');
        next();
    })
    .delete((req, res) => {
        res.send('DELETE a comment!');
    })