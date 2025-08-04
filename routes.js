const express = require('express');
const router = express.Router();
const Quelle = require('./models/quellen');

// eine GET-Anfrage
router.get('/quellen', async(req, res) => {
    const allQuellen = await Quelle.find();
    res.send(allQuellen);
});

router.post('/quellen', async(req, res) => {
    const newQuelle = new Quelle({
        objekt_id: req.body.objekt_id,
        objekt_name: req.body.objekt_name,
        objekt_inventarnr: req.body.objekt_inventarnr,
        objekt_erfasst_am: req.body.objekt_erfasst_am,
        institution_id: req.body.institution_id,
        institution_name: req.body.institution_name,
        image: req.body.image,
        image_height: req.body.image_height
    })
    await newQuelle.save();
    res.send(newQuelle);
});

router.get('/quellen/:id', async(req, res) => {
    const quelle = await Quelle.findOne({ _id: req.params.id });
    console.log(req.params);
    if(quelle) {
        res.send(quelle);
    } else {
        res.status(404);
        res.send({
            error: "Source does not exist!"
        });
    }
})

router.delete('/quellen/:id', async(req, res) => {
    try {
        await Quelle.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: "Source does not exist!" })
    }
});

module.exports = router;