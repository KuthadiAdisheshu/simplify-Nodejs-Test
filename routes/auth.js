const router = require("express").Router();

const article = require("../models/article");
const user = require("../models/user");
const other=require("../models/other");





//post articles API client details in mongodb

router.post("/articledetails", (req, res, next) => {
    const articlebook = new article({
        id: req.body.id,
        author: req.body.author,
        title: req.body.title,
        body: req.body.body,
        numberoflikes: req.body.numberoflikes,
        numberofviews: req.body.numberofviews



    });
    articlebook
        .save()
        .then((_) => {
            return res.json({
                success: true,
                message: "Article book  is created sucessfully",
            });
        })
        .catch((err) => {
            return res.json({ success: false, message: "failed to create Article book" });
        });
});

//post Users API  details in mongodb
router.post("/userdetails", (req, res, next) => {
    const userss = new user({
        id: req.body.id,
        name: req.body.name



    });
    userss
        .save()
        .then((_) => {
            return res.json({
                success: true,
                message: "user details  is created sucessfully",
            });
        })
        .catch((err) => {
            return res.json({ success: false, message: "failed to create user detail" });
        });
});


//To keep track of views and likes  
router.post("/other", (req, res, next) => {
    const user = new other({
        id: req.body.id,
        number:req.body.number



    });
    user
        .save()
        .then((_) => {
            return res.json({
                success: true,
                message: "user details  is created sucessfully",
            });
        })
        .catch((err) => {
            return res.json({ success: false, message: "failed to create user detail" });
        });
});

router.get("/others", (req, res, next) => {
    other
      .find({})
      .select("number")
      .populate("number")
      
  
      .exec()
      .then((result) => {
        console.log("Result", JSON.stringify(result));
        res.json({ success: true, data: result });
      })
      .catch((err) => {
        res.json({ success: false, message: "Server error" });
      });
  });
module.exports = router;