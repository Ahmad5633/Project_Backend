
import seasonModel from "../models/season.js";
import authenticate from "../middlewares/authenticate.js";
const SeasonController = {

    getAll :async (req, res)=> {
        try {
            const seasons = await seasonModel.find();
            res.send(seasons);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    getById:async (req, res) => {
        try {
            const season = await seasonModel.findById(req.params.id);
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
            const newSeason = await seasonModel.create(req.body);
            res.send(newSeason);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    updateSeasonById : async (req, res) => {
        try {
            const season = await seasonModel.findByIdAndUpdate(req.params.id, req.body);
            res.send(season);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    deleteSeasonById : [authenticate , async (req, res) => {
        try {
            const season = await seasonModel.findByIdAndDelete(req.params.id);
            res.send(season);
        } catch (error) {
            res.status(500).send(error);
        }
    }]
};

export default SeasonController ;