import User from "../models/user.model.js";
import Message from "../models/message.model.js";

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

export const getMessages = async(res, req) => {
    try {
        const {id:userToChatId} = req.params;
        const myId = req.user._id;
        
        const messages = await Message.find({
            $or:[
                {senderId:myId, receiverId:userToChatId},
                {senderId:userToChatId, receiverId:myId} //We will get all the messages between me and other user
            ]
        })

        res.status(200).json(messages)
    } catch (error) {
        console.log("Error in getMessages: ", error.message);
        res.status(500).json({ error: "Internal Server Error"});
    }
};