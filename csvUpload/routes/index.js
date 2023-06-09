const router = require("express").Router();

const {
   home,
   uploadFile,
   purgeFile,
   displayFiles,
} = require("../controller/fileController");

// HOME PAGE
router.get("/", home);

// UPLOAD THR CSV FILE
router.post("/upload", uploadFile);

// DELETE A CSV FILE
router.get("/purge/:file", purgeFile);

// SHOW THE CSV FILE
router.get("/display", displayFiles);

module.exports = router;