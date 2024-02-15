
import experienceModel from '../model/experienceModel.js';
import skillModel from '../model/skillModel.js'


export const getSkillList = async (req, res) => {
    try {
        const skill = await skillModel.find({})

        return res.status(201).send({
            success: true,
            message: "get list of skill sucess",
            skill,
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            error: error,
            message: "get skill list failed",
        });
    }
}

export const createSkill = async (req, res) => {
    const { title, image } = req.body

    try {
        if (!title) {
            return res.status(400).send({
                message: "title is required",
            });
        }
        if (!image) {
            return res.status(400).send({
                message: "title is required",
            });
        }

        const skill = new skillModel({
            title,
            image
        })
        await skill.save()


        return res.status(400).send({
            success: true,
            message: "create skill success",
            skill
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            error: error,
            message: "create skill list failed",
        });
    }
}

export const updateSkill = async (req, res) => {
    const { title, image} = req.body
    
    try {
        if (!title) {
            return res.status(400).send({
                message: "title is required",
            });
        }
        if (!image) {
            return res.status(400).send({
                message: "title is required",
            });
        }

        const skill = await skillModel.findByIdAndUpdate(req.params._id, {...req.body}, {new: true})

        await skill.save()
        return res.status(201).send({
            message: "skill update success",
            skill,
        });
    } catch (error) {
        return res.status(400).send({
            message: "skill update faield",
        });
    }
}

export const deleteSkill = async (req, res) => {
    const skill = await skillModel.findByIdAndDelete(req.params._id)

    if(skill){
        return res.status(200).json({
            success: true,
            message: "skill delete success",
            skill,
        })
    }else {
        return res.status(500).json({
            success: true,
            message: "skill delete failed",
            skill,
        })
    }
}


/* 
    experience block
*/
export const createExperience = async (req, res) => {
    const { title, period, description, company } = req.body;
  
    try {
      if (!title) {
        return res.status(400).send({ message: "title is required" });
      }
      if (!description) {
        return res.status(400).send({ message: "description is required" });
      }
      if (!company) {
        return res.status(400).send({ message: "company is required" });
      }
  
      const experience = new experienceModel({
        title,
        period,
        description,
        company
      });
      await experience.save();
      return res.status(201).json({
        success: true,
        message: "create experience success",
        experience,
      });
    } catch (error) {
        return res.status(500).json({
            success: true,
            message: "create experience failed",
          });
    }
  };
  
  export const getExperience = async (req, res) => {
    try {
      const experience = await experienceModel.find({});
      return res.status(201).send({
        success: true,
        message: "get experience list success",
        experience,
      });
    } catch (error) {
      return res.status(500).send({
        error: error,
        message: "get experience list failed",
        success: false,
      });
    }
  };
  
  export const updateExperience = async (req, res) => {
    const { title, period, description, company } = req.body;
  
    try {
      if (!title) {
        return res.status(400).send({ message: "title is required" });
      }
      if (!period) {
        return res.status(400).send({ message: "period is required" });
      }
      if (!description) {
        return res.status(400).send({ message: "description is required" });
      }
      if (!company) {
        return res.status(400).send({ message: "company is required" });
      }
  
      const experience = await experienceModel.findByIdAndUpdate(
        req.params._id,
        { ...req.body },
        { new: true }
      );
      await experience.save();
      res.status(201).send({
        success: true,
        message: "experience update success",
        experience,
      });
    } catch (error) {
      return res.status(500).send({
        error: error,
        message: "update experience failed",
        success: false,
      });
    }
  };
  
  export const deleteExperience = async (req, res) => {
    try {
      const experience = await experienceModel.findByIdAndDelete(req.params._id);
      return res.status(201).send({
        success: true,
        message: "delete experience success",
        experience,
      });
    } catch (error) {
      return res.status(500).send({
        error: error,
        message: "delete experience failed",
        success: false,
      });
    }
  };
  