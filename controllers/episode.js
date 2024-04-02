

import episodeModel from "../models/episode.js";
import authenticate from "../middlewares/authenticate.js";
const EpisodeController = {

    getAll :async (req, res)=> {
        try {
            const episodes = await episodeModel.find();
            res.send(episodes);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    getById: [authenticate, async (req, res) => {
        try {
            const episode = await episodeModel.findById(req.params.id);
            res.send(episode);
        } catch (error) {
            res.status(500).send(error);
        }
    }],
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
            const newEpisode = await episodeModel.create(req.body);
            res.send(newEpisode);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    updateEpisodeById :[authenticate , async (req, res) => {
        try {
            const episode = await episodeModel.findByIdAndUpdate(req.params.id, req.body);
            res.send(episode);
        } catch (error) {
            res.status(500).send(error);
        }
    }],
    deleteEpisodeById : [authenticate , async (req, res) => {
        try {
            const episode = await episodeModel.findByIdAndDelete(req.params.id);
            res.send(episode);
        } catch (error) {
            res.status(500).send(error);
        }
    }]
};

export default EpisodeController ;