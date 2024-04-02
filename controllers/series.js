import SeriesModel from "../models/series.js";
import Authenticate from "../middlewares/authenticate.js";
const SeriesController = {

    getAll :async (req, res)=> {
        try {
            const series = await SeriesModel.find();
            res.send(series);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    getById: async (req, res) => {
        try {
            const serie = await SeriesModel.findById(req.params.id);
            res.send(serie);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    getSeasonsBySeriesId: async (req, res) => {
        try {
            const seriesId = mongoose.Types.ObjectId(req.params.id);
    
            const seasons = await seasonModel.find({ series: seriesId });
    
            res.status(200).json(seasons);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getEpisodesBySeriesId: async (req, res) => {
        try {
            const seriesId = mongoose.Types.ObjectId(req.params.id);
    
            const series = await SeriesModel.findById(seriesId);
    
            if (!series) {
                return res.status(404).json({ message: "Series not found" });
            }
    
            const seasonIds = series.seasons;
    
            const episodes = await episodeModel.find({ season_id: { $in: seasonIds } });
    
            res.status(200).json(episodes);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    
    create : async (req, res) => {
        try {
            const series = await SeriesModel.create(req.body);
            res.send(series);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    updateSeriesById :[Authenticate , async (req, res) => {
        try {
            const series = await SeriesModel.findByIdAndUpdate(req.params.id, req.body);
            res.send(series);
        } catch (error) {
            res.status(500).send(error);
        }
    }],
    deleteSeriesById : [Authenticate , async (req, res) => {
        try {
            const series = await SeriesModel.findByIdAndDelete(req.params.id);
            res.send(series);
        } catch (error) {
            res.status(500).send(error);
        }
    }]
};

export default SeriesController ;