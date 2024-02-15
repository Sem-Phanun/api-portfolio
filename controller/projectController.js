import projectModel from '../model/projectModel.js'

export const createProject = async (req, res) => {
    try {
        const { title, description, image, links, technologies } = req.body
        if(!title){
            return res.status(401).send({
                message: "Title is required"
            })
        }
        if(!description) {
            return res.status(401).send({
                message: "Description is required"
            })
        }
        if(!links){
            return res.status(401).send({
                message: "Links is required"
            })
        }   

        const projects = new projectModel({
            title,
            description,
            image,
            links,
            technologies
        })
        await projects.save()
        res.status(201).json({
            success: true,
            message: "Create project successfully",
            projects,
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Failed to create project ",
        })
    }
}


export const getAllProject = async (req, res) => {
    try {
        const projects = await projectModel.find({})

        res.status(200).send({
            success: true,
            message: "All project list ",
            projects,
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "failed to get project"
        })
    }
}

export const getSingleProject = async (req, res) => {
    try {
        const projects = await projectModel.findOne({
            _id: req.params
        })

        return res.status(200).json({
            success: true,
            message: "get single project success",
            projects,
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "failed to get project"
        })
    }
}

export const updateProject = async (req, res) => {
    try {
        const { title, description, image, links, technologies} = req.body

        if(!title){
            return res.status(201).send({
                message: "title is required"
            })
        }
        if(!description){
            return res.status(201).send({
                message: "description is required"
            })
        }
        if(!links){
            return res.status(201).send({
                message: "links is required"
            })
        }

        const projects = await projectModel.findByIdAndUpdate(
            req.params._id,
            {...req.body},
            {new: true}
        )

        await projects.save()

        return res.status(200).json({
            success: true,
            message: "Project update success",
            projects,
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Update failed"
        })
    }
}

export const deleteProject = async (req, res) => {
    const projects = await projectModel.findByIdAndDelete(req.params._id)
    return res.status(200).json({
        success: true,
        message: "project delete success",
        projects,
    })
}