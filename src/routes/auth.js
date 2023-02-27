const router = require("express").Router();
const jwt = require("jsonwebtoken");
const { verifyToken } = require("../middlewares/auth");

router.get("/teste", verifyToken, (req, res) => {
    return res.json({ teste: true });
});

router.post("/auth", (req, res) => {
    const { username, password } = req.body;
    const token = jwt.sign({ username, password }, process.env.JWT_SECRET, { expiresIn: "1000s" });
    return res.json({ token });
});

router.post("/refresh", (req, res) => {
    const { username, password } = req.body;
    const token = jwt.sign({ username, password }, process.env.JWT_REFRESH_SECRET, { expiresIn: "1000s" });
    return res.json({ token });
});

module.exports = router;