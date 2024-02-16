import socialModel from "../model/socialModel.js";

export const createSocial = async (req, res) => {
  const { title, link, image } = req.body;

  try {
    if (!title) {
      return res.status(400).send({
        message: "title is required",
      });
    }
    if (!link) {
      return res.status(400).send({
        message: "link is required",
      });
    }
    if (!image) {
      return res.status(400).send({
        message: "title is required",
      });
    }

    const social = new socialModel({
      title,
      link,
      image,
    });
    await social.save();

    return res.status(201).send({
      success: true,
      message: "create success",
      hero,
    });
  } catch (error) {
    return res.status(500).send({
      error: error,
      success: true,
      message: "create failed",
    });
  }
};

export const getSocial = async (req, res) => {
  const social = await socialModel.find({});
  if (social) {
    return res.status(201).send({
      message: "get success",
      social,
    });
  } else {
    return res.status(500).send({
      message: "get failed",
      success: false,
    });
  }
};

export const updateSocial = async (req, res) => {
  const { title, link, image } = req.body;

  try {
    if (!title) {
      return res.status(400).send({
        message: "title is required",
      });
    }
    if (!link) {
      return res.status(400).send({
        message: "link is required",
      });
    }
    if (!image) {
      return res.status(400).send({
        message: "title is required",
      });
    }

    const social = await socialModel.findByIdAndUpdate(
      req.params._id,
      { ...req.body },
      { new: true }
    );
    await social.save();

    return res.status(201).send({
      success: true,
      message: "update success",
      social,
    });
  } catch (error) {
    return res.status(500).send({
      error: error,
      success: false,
      message: "update failed",
    });
  }
};

export const deleteSocial = async (req, res) => {
  const social = await socialModel.findByIdAndDelete(req.params._id);

  if (social) {
    return res.status(201).send({
      success: true,
      message: "delete success",
      social,
    });
  } else {
    return res.status(t00).send({
      success: false,
      message: "update failed",
    });
  }
};
