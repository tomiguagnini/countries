const { Router } = require("express");
const { Activity, Country } = require("../db.js");
const axios = require("axios");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/", (req, res) => res.send("hola"));

router.get("/countries", async (req, res) => {
    try {
        const allCountries = await Country.findAll();
        if (allCountries.length === 0) {
            const response = await axios.get(
                "https://restcountries.com/v3/all"
            );
            const data = response.data.map((e) => {
                return {
                    id: e.cca3,
                    name: e.name.common,
                    flag: e.flags.join(","),
                    continent: e.region,
                    capital: e.capital ? e.capital[0] : "No tiene capital",
                    subregion: e.subregion,
                    area: e.area,
                    population: e.population,
                };
            });
            const countries = await Country.bulkCreate(data);
            return res.status(200).json(countries);
        }else{
            return res.status(200).json(allCountries)
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({ err: err.message });
    }
});
router.get("/countries/:id", (req, res) => {});

router.post("/activities", (req, res) => {});
module.exports = router;
