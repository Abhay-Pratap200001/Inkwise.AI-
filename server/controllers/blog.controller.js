import fs from 'fs'
import imagekit from '../config/imagekit.js';
import Blog from '../models/Blog.js';

export const addBlog = async (req, res) => {
    try {
        const {title, subTitle, description, category, isPublished} = JSON.parse(req.body.blog);
        const imageFile = req.file;

        if (!title || !description || !category || !imageFile) {
            return res.json({sucess: false, message: "Fileds are missing"})
        }

        //uploading image to imagekit
        const fileBuffer = fs.readFileSync(imageFile.path)
        const response = await imagekit.upload({
            file:fileBuffer,
            fileName:imageFile.originalname,
            folder:"/blogs"
        })

        //optimizing imag through imagekit URL transformation
        const optimizedImageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                {quality: 'auto'},
                {format: 'webp'},
                {width: '1280'}
            ]
        })

        const image = optimizedImageUrl;

        await Blog.create({title, subTitle, description, category, image, isPublished})
        res.json({sucess: true, message: "Blog Created sucessfully"})

    } catch (error) {
    res.json({sucess: false, message: error.message})
    }
}