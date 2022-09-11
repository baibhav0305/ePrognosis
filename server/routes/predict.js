const router = require("express").Router();
const {
  skin,
  hepatitis,
  stomach,
  breastCancer,
  insurance,
} = require("../controllers/predict");

router.post("/skin", skin);
router.post("/hepatitis", hepatitis);
router.post("/stomach", stomach);
router.post("/breastCancer", breastCancer);
router.post("/insurance", insurance);

module.exports = router;
