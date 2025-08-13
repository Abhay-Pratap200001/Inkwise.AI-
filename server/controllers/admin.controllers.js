import User from "../models/user.js";
import bcryptjs from "bcrypt";
import jwt from "jsonwebtoken";
import Blog from "../models/Blog.js";
import Comment from "../models/Comment.js";



//admin controller
export const adminLogin = async (req, res) =>{
  try {
    const {email, password} = req.body;
    if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
      return res.json({success: false, message: "Invalid Credentials"})
    }
    
    const token = jwt.sign({email}, process.env.JWT_SECRET)
    res.json({success:true, token})
  } catch (error) {
    res.json({success:false, message:error.message})
  }
}

export const userLogout = async (req, res, next) => {
  try {
    res.clearCookie("access_token"); // clear cooies which is store in frontend
    res.status(200).json("User has been logged out!"); // sending response
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//Getting All AdminBlogs
export const getAllBlogsAdmin = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    res.json({ success: true, blogs });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};


//Getting All AdminComments
export const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find({})
      .populate("blog")
      .sort({ createdAt: -1 });
    res.json({ success: true, comments });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};


//Adminn dashbord data
export const getDashbord = async (req, res) => {
  try {
    const recentBlogs = await Blog.find({}).sort({ createdAt: -1 }).limit(5);
    const blogs = await Blog.countDocuments();
    const comments = await comments.countDocuments();
    const drafts = await Blog.countDocuments({ isPublished: false });

    const dashbordData = {blogs, comments, drafts, recentBlogs,};
    res.json({ success: true, dashbordData });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};



export const deletCommentById = async (req, res) => {
  try {
    const {id} = req.body;
    await Comment.findByIdAndDelete(id);
    res.json({success:true, message:"Comment deleted successfully"})
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}


export const approveCommentById = async (req, res) => {
  try {
    const {id} = req.body;
    await Comment.findByIdAndUpdate(id, {isApproved:true});
    res.json({success:true, message:"Comment approved successfully"})
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}



