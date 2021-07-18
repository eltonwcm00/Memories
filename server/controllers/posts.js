const PostMessage = require('../models/postMessage.js');

module.exports.getPosts = async (req, res) => {
    try { 
        
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);  // return if query is successfully execute
    
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

module.exports.createPost = async (req, res) => {
    
    const post = req.body;

    const newPost = new PostMessage(post);
    
    try { 
        
       await newPost.save();
       res.status(201).json(newPost);
       
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}