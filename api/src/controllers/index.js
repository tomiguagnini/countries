const { QueryTypes } = require("sequelize");
const { Country, Activity } = require("../db.js");
const { conn } = require("../db.js");
const axios = require("axios");

const getAllCountries = async (req, res) => {
    try {
        const { name } = req.query;
        if (name) {
            const results = await conn.query(
                'SELECT * FROM "Countries" WHERE name ILIKE :search_name',
                {
                    replacements: { search_name: `%${name}%` },
                    type: QueryTypes.SELECT,
                }
            );
            return res.status(200).json(results);
        } else {
            const allCountries = await Country.findAll({include: Activity});
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
            } else {
                return res.status(200).json(allCountries);
            }
        }
    } catch (err) {
        console.log(err);
        return res.status(400).json({ err: err.message });
    }
};

const getCountryByPK = async (req, res) => {
    try {
        const { id } = req.params;
        const country = await Country.findByPk(id.toUpperCase(),{include:Activity});

        if (country === null) {
            throw Error("Not Found");
        } else {
            return res.status(200).json(country);
        }
        
    } catch (error) {
        return res.status(404).json({ err: error.msg });
    }
};
const createActivity = async (req, res) => {
    try {

        //req.body.id = Math.floor(Math.random() * 100000).toString();
        req.body.idCountry = 'ARG'
        const {  name, difficulty, season, duration, idCountry } = req.body;
        console.log(req.body);
        if (!name || !difficulty || !season || !duration || !idCountry) {
            throw Error("Faltan campos");
        }
        const country = await Country.findByPk(idCountry.toUpperCase());
        const activity = await Activity.create(req.body);
        activity.addCountry(country);
        return res.status(200).json(activity);
    } catch (error) {
        console.log(error);
        return res.status(404).json({ err: error.message });
    }
};
module.exports = {
    getCountryByPK,
    getAllCountries,
    createActivity,
};
