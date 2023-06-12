import { create, search, update, deletE } from "../services/comment.service.js";

export const post = async(req, res) => {
    try {
        const record = await create(req);
        res.send({
            Message : record,
        });
    } catch(error) {
        res.send({
            Message : "Request failed!!",
        });
    }
};

export const get = async(req, res) => {
    try {
        const record = await search(req);
        res.send({
            Message : record,
        });
    } catch(error) {
        res.send({
            Message : "Request failed!!",
        });
    }
};

export const put = async(req, res) => {
    try {
        const record = await update(req);
        res.send({
            Message : record,
        });
    } catch(error) {
        res.send({
            Message : "Request failed!!",
        });
    }
};

export const deleteIt = async(req, res) => {
    try {
        const record = await deletE(req);
        res.send({
            Message : record,
        });
    } catch(error) {
        res.send({
            Message : "Request failed!!",
        });
    }
};