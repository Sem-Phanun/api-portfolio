import aboutModel from "../model/aboutModel.js";
import educationModel from "../model/educationModel.js";

export const createInfo = async (req, res) => {
  try {
    const { image, title, description } = req.body;

    if (!title) {
      return res.status(400).send({
        message: "title is required",
      });
    }
    if (!description) {
      return res.status(400).send({
        message: "description is required",
      });
    }

    const abouts = new aboutModel({
      image,
      title,
      description,
    });
    await abouts.save();
    return res.status(201).json({
      success: true,
      message: "Create infor success",
      abouts,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      error: error,
      message: "failed to create infor",
    });
  }
};

export const getAllInfo = async (req, res) => {
  try {
    const abouts = await aboutModel.find({});
    res.status(201).send({
      success: true,
      message: "get info success",
      abouts,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error,
      message: "failed to get info",
    });
  }
};

export const getSingleInfo = async (req, res) => {
  try {
    const abouts = await aboutModel.findOne({ _id: req.params });

    res.status(201).send({
      success: true,
      message: "get info success",
      abouts,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error,
      message: "failed to get info",
    });
  }
};

export const updateInfo = async (req, res) => {
  const { image, title, description } = req.body;

  try {
    if (!image) {
      return res.status(400).send({
        message: "image is required",
      });
    }
    if (!title) {
      return res.status(400).send({
        message: "title is required",
      });
    }
    if (!description) {
      return res.status(400).send({
        message: "description is required",
      });
    }

    const abouts = await aboutModel.findByIdAndUpdate(
      req.params._id,
      { ...req.body },
      { new: true }
    );
    await abouts.save();
    res.status(201).send({
      success: true,
      message: "info update success",
      abouts,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error,
      message: "info update failed",
    });
  }
};

export const deleteInfo = async (req, res) => {
  try {
    const abouts = await aboutModel.findByIdAndDelete(req.params._id);
    res.status(201).send({
      success: true,
      message: "delete succesfully",
      abouts,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error,
      message: "failed to delete",
    });
  }
};

export const createEducation = async (req, res) => {
  const { title, period } = req.body;

  try {
    if (!title) {
      return res.status(400).send({ message: "title is required" });
    }
    if (!period) {
      return res.status(400).send({ message: "period is required" });
    }

    const education = new educationModel({
      title,
      period,
    });
    await education.save();
    return res.status(201).json({
      success: true,
      message: "create education info success",
      education,
    });
  } catch (error) {}
};

export const getEduInfo = async (req, res) => {
  try {
    const education = await educationModel.find({});
    return res.status(201).send({
      success: true,
      message: "get edu info success",
      education,
    });
  } catch (error) {
    return res.status(500).send({
      error: error,
      message: "get edu info failed",
      success: false,
    });
  }
};

export const updateEduInfo = async (req, res) => {
  const { title, period } = req.body;

  try {
    if (!title) {
      return res.status(400).send({ message: "title is required" });
    }
    if (!period) {
      return res.status(400).send({ message: "period is required" });
    }

    const education = await educationModel.findByIdAndUpdate(
      req.params._id,
      { ...req.body },
      { new: true }
    );
    await education.save();
    res.status(201).send({
      success: true,
      message: "edu info update success",
      abouts,
    });
  } catch (error) {
    return res.status(500).send({
      error: error,
      message: "update edu info failed",
      success: false,
    });
  }
};

export const deleteEduInfo = async (req, res) => {
  try {
    const edu = await educationModel.findByIdAndDelete(req.params._id);
    return res.status(201).send({
      success: true,
      message: "delete edu info success",
      edu,
    });
  } catch (error) {
    return res.status(500).send({
      error: error,
      message: "delete edu info failed",
      success: false,
    });
  }
};
