

import EpisodeModel from "../models/episode.js";
import Authenticate from "../middlewares/authenticate.js";
const EpisodeController = {

    getAll :async (req, res)=> {
        try {
            const episodes = await EpisodeModel.find();
            res.send(episodes);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    getById: async (req, res) => {
        try {
            const episode = await EpisodeModel.findById(req.params.id);
            res.send(episode);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    getAllStreams: async(req,res) => {
        try {
            const episodeId = mongoose.Types.ObjectId(req.params.id);
    
            const streams = await streamModel.find({ episode_id: episodeId });
    
            res.status(200).json(streams);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
   
    create : async (req, res) => {
        try {
            const newEpisode = await EpisodeModel.create(req.body);
            res.send(newEpisode);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    updateEpisodeById :[Authenticate , async (req, res) => {
        try {
            const episode = await EpisodeModel.findByIdAndUpdate(req.params.id, req.body);
            res.send(episode);
        } catch (error) {
            res.status(500).send(error);
        }
    }],
    deleteEpisodeById : [Authenticate , async (req, res) => {
        try {
            const episode = await EpisodeModel.findByIdAndDelete(req.params.id);
            res.send(episode);
        } catch (error) {
            res.status(500).send(error);
        }
    }]
};

export default EpisodeController ;