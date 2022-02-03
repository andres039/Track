const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

//gets all the practices -- needs to target to current user.

router.get("/practice", async (req, res, next) => {
  try {
    const practices = await prisma.practice.findMany();
    res.json(practices);
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

    validPassword
      ? res.status(200).json({"message": "Welcome!"})
      : res.status(401).json({ message: "Invalid password" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
