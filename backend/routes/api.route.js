const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
//const { user } = require("pg/lib/defaults");
const prisma = new PrismaClient();

//gets all the practices -- needs to target to current user.
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) return res.sendStatus(401);

  jwt.verify(token, process.env.TOKEN_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

router.get("/practice", authenticateToken, async (req, res, next) => {
  try {
    const practices = await prisma.practice.findMany({
      where: { userId: 2}
    });
    res.json(req.user);
  } catch (error) {
    next(error);
  }
});

router.post("/practice", async (req, res, next) => {
  try {
    const practice = await prisma.practice.create({
      data: req.body,
    });
    res.json(practice);
  } catch (error) {
    next(error);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
      },
    });
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const currentUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    !currentUser && res.json({ message: "This email is not registered" });

    const validPassword = await bcrypt.compare(password, currentUser.password);
    const user = { id: currentUser.id };

    if (validPassword) {
      // Create token
      const accessToken = jwt.sign( {user: currentUser}, process.env.TOKEN_KEY);
      res.json({ accessToken: accessToken });
    } else {
      res.status(401).json({ message: "Invalid password" });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
