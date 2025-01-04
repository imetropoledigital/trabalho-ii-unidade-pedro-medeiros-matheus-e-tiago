const express = require("express");
const router = express.Router();

const controller = require("./controller/entity.controller");

router.get("/health", (__, res) => {
  res.status(200).send({
    status: "OK",
    timestamp: new Date().toISOString(),
  });
});

router.post("/:entity", controller.insert);
router.get("/:entity", controller.list);
router.get("/:entity/:id", controller.getById);
router.put("/:entity/:id", controller.updateById);

module.exports = router;
