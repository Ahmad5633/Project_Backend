
import GenreModel from "../models/genre.js";
import authenticate from "../middlewares/authenticate.js";
const GenreController = {

    getAll :async (req, res)=> {
        try {
            const genres = await GenreModel.find();
            res.send(genres);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    getById: [authenticate, async (req, res) => {
        try {
            const genre = await GenreModel.findById(req.params.id);
            res.send(genre);
        } catch (error) {
            res.status(500).send(error);
        }
    }],
    getSeriesByGenreId: async (req, res) => {
        try {
            const genreId = mongoose.Types.ObjectId(req.params.id);
    
            const series = await seriesModel.find({ genre: genreId });
    
            res.status(200).json(series);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    
    getSeasons: async (req, res) => {
        try {
            const genreId = mongoose.Types.ObjectId(req.params.id);
    
            const seasons = await seriesModel.aggregate([
                // Match series of the specified genre
                {
                    $match: { genre: genreId }
                },
                // Unwind the seasons array
                {
                    $unwind: "$seasons"
                },
                // Lookup to get season details
                {
                    $lookup: {
                        from: "Seasons",
                        localField: "seasons",
                        foreignField: "_id",
                        as: "seasonDetails"
                    }
                },
                // Group by series to push all seasons into an array
                {
                    $group: {
                        _id: "$_id",
                        series: { $first: "$$ROOT" },
                        seasons: { $push: "$seasonDetails" }
                    }
                }
            ]);
    
            res.status(200).json(seasons);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    
    create : async (req, res) => {
        try {
            const genre = await GenreModel.create(req.body);
            res.send(genre);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    updateGenreById :[authenticate , async (req, res) => {
        try {
            const genre = await GenreModel.findByIdAndUpdate(req.params.id, req.body);
            res.send(genre);
        } catch (error) {
            res.status(500).send(error);
        }
    }],
    deleteGenreById : [authenticate , async (req, res) => {
        try {
            const genre = await GenreModel.findByIdAndDelete(req.params.id);
            res.send(genre);
        } catch (error) {
            res.status(500).send(error);
        }
    }]
};

export default GenreController ;