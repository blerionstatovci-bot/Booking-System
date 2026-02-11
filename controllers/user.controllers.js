const userService = require("../services/user.services");

const register = async (req, res) =>{
    try{
        const { fullName, age, email, password, location, Image} = req.body;
        const user = await userService.register( fullName, age, email, password, location, Image);
        res.status(201).json(user);
    }
    catch(err){
        res.status(400).json({message:"Useri nuk u regjistrua"});
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userService.login(email, password);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ msg: "Email ose password i pasakt" });
        }
    } catch (err) {
        res.status(500).json({ msg: "Gabim ne login" });
    }
};


const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({msg:"Gabim gjate marrjes te users" });
    }
};

const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await userService.getUserById(userId);
        res.status(200).json(user);
    } catch (err) {
        res.status(401).json({ msg: "Could not get user: " + err.message });
    }};
    
const updateUser = async (req, res) => {
try{
    const userId = req.params.id;
    const updates = req.body;
    const updated = await userService.updateUser(userId, updates);
    if (!updated){
        return res.status(404).json({msg: "User not found to update"});
    }
    res.status(200).json(updated);
}catch(err){
    res.status(500).json({msg: "Could not update user: " + err.message});
}};

const deleteUser = async (req, res) =>{
    try{
        const userId = req.params.id;
        const deleted = await userService.deleteUser(userId);
    if(!deleted){
        return res.status(404).json({msg: "User not found to delete"});
    }
    res.status(200).json(deleted);

}catch(err){
    res.status(500).json({msg: "Could not delete user: " + err.message});
}};

module.exports = { register, login, getAllUsers, getUserById, updateUser, deleteUser };