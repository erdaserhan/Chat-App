import User from "../models/user.model.js";

export const getUsersForSidebar = async(req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({_id: {$ne:loggedInUserId}}).select("-password"); //Find all the users without the loggedInUserId. ne(not include)

        res.status(200).json(filteredUsers)
    } catch (error) {
        console.log("Error in getUserForSidebar: ", error.message);
        res.status(500).json({ error: "Internal Server Error"});
    }
};