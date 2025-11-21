import express from 'express';
import { deleteMessage } from '../controllers/message.controller.js'

const router = express.Router();

router.get("/send", (req, res) => {
  res.send("Send message endpoint");
});

router.get("/receive", (req, res) => {
  res.send("receive message endpoint");
});

router.get("/delete", deleteMessage);

export default router;