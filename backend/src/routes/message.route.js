import express from 'express';

const router = express.Router();

router.get("/send", (req, res) => {
  res.send("Send message endpoint");
});

router.get("/receive", (req, res) => {
  res.send("receive message endpoint");
});

router.get("/delete", (req, res) => {
  res.send("delete message endpoint");
});

export default router;