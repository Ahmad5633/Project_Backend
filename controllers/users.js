
import userModel from "../models/users.js";
import jwt from "jsonwebtoken";
import authenticate from "../middlewares/authenticate.js";
const UserController = {

    getAll :async (req, res)=> {
        try {
            const users = await userModel.find();
            res.send(users);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    getById: [authenticate, async (req, res) => {
        try {
            const user = await userModel.findById(req.params.id);
            res.send(user);
        } catch (error) {
            res.status(500).send(error);
        }
    }],
    getStreams : async (req, res) => {
        try {
            const streams = await userModel.aggregate([
                {
                    $match: { _id: mongoose.Types.ObjectId(req.params.id) }
                },
                {
                    $lookup: {
                        from: "Stream",
                        localField: "_id",
                        foreignField: "User",
                        as: "Streams"
                    }
                }
            ]);
            res.status(200).json(streams);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getStreamsById : async (req, res) => {
        try {
            const userId = req.params.userId;
            const streamId = req.params.streamId;
    
            const user = await userModel.findById(userId);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
    
            const stream = await streamModel.findOne({ _id: streamId, User: userId });
            if (!stream) {
                return res.status(404).json({ message: "Stream not found for the user" });
            }
    
            res.status(200).json({ user, stream });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    register : async (req, res) => {
        try {
            const user = await userModel.create(req.body);
            res.send(user);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    login : async (req, res) => {
        try {
            const user = await userModel.findOne({
                email: req.body.email,
                password: req.body.password,
            });
            if (!user) return res.status(401).send("Invalid email or password.");
            const token = jwt.sign({ id: user._id }, "my_temporary_secret", {
                expiresIn: "1h",
            });
            res.send(token);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    updateUserById :[authenticate , async (req, res) => {
        try {
            const user = await userModel.findByIdAndUpdate(req.params.id, req.body);
            res.send(user);
        } catch (error) {
            res.status(500).send(error);
        }
    }],
    deleteUserById : [authenticate , async (req, res) => {
        try {
            const user = await userModel.findByIdAndDelete(req.params.id);
            res.send(user);
        } catch (error) {
            res.status(500).send(error);
        }
    }]
};

export default UserController ;