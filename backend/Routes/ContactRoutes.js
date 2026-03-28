const express = require("express");
const router = express.Router();
const { sendMessage, getMessages } = require("../Controllers/ContactController");

router.post("/contact", sendMessage);
router.get("/contact-messages", getMessages);

module.exports = router;
