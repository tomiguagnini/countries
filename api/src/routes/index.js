const { Router } = require("express");
const { getCountryByPK, getAllCountries } = require("../controllers/index.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//router.get("/", (req, res) => res.send("hola"));
router.get("/countries", getAllCountries);
router.get("/countries/:id",getCountryByPK);

router.post("/activities", (req, res) => {});
module.exports = router;
