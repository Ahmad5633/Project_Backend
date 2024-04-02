
import SeasonModel from "../models/season.js";
import Authenticate from "../middlewares/authenticate.js";
const SeasonController = {

    getAll :async (req, res)=> {
        try {
            const seasons = await SeasonModel.find();
            res.send(seasons);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    getById:async (req, res) => {
        try {
            const season = await SeasonModel.findById(req.params.id);
            res.send(season);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    getEpisodesBySeasonId: async (req, res) => {
        try {
            const seasonId = mongoose.Types.ObjectId(req.params.id);
  
            const episodes = await episodeModel.find({ season_id: seasonId });
    
            res.status(200).json(episodes);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    create : async (req, res) => {
        try {
            const newSeason = await SeasonModel.create(req.body);
            res.send(newSeason);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    updateSeasonById :[Authenticate , async (req, res) => {
        try {
            const season = await SeasonModel.findByIdAndUpdate(req.params.id, req.body);
            res.send(season);
        } catch (error) {
            res.status(500).send(error);
        }
    }],
    deleteSeasonById : [Authenticate , async (req, res) => {
        try {
            const season = await SeasonModel.findByIdAndDelete(req.params.id);
            res.send(season);
        } catch (error) {
            res.status(500).send(error);
        }
    }]
};

export default SeasonController ;