import heroModel from "../model/heroModel.js";

export const createHero = async (req, res) => {
  const { title, name, role, image } = req.body;

  try {
    if (!title) {
      return res.status(400).send({
        message: "title is required",
      });
    }
    if (!name) {
      return res.status(400).send({
        message: "name is required",
      });
    }
    if (!role) {
      return res.status(400).send({
        message: "title is required",
      });
    }
    if (!image) {
      return res.status(400).send({
        message: "title is required",
      });
    }

    const hero = new heroModel({
      title,
      name,
      role,
      image,
    });
    await hero.save();

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

export const getHero = async (req, res) => {
  const hero = await heroModel.find({});
  if (hero) {
    return res.status(201).send({
      message: "get success",
      hero,
    });
  } else {
    return res.status(500).send({
      message: "get failed",
      success: false,
    });
  }
};

export const updateHero = async (req, res) => {
  const { title, name, role, image } = req.body;

  try {
    if (!title) {
      return res.status(400).send({
        message: "title is required",
      });
    }
    if (!name) {
      return res.status(400).send({
        message: "name is required",
      });
    }
    if (!role) {
      return res.status(400).send({
        message: "title is required",
      });
    }
    if (!image) {
      return res.status(400).send({
        message: "title is required",
      });
    }

    const hero = await heroModel.findByIdAndUpdate(
      req.params._id,
      { ...req.body },
      { new: true }
    );
    await hero.save();

    return res.status(201).send({
      success: true,
      message: "update success",
      hero,
    });
  } catch (error) {
    return res.status(500).send({
      error: error,
      success: false,
      message: "update failed",
    });
  }
};

export const deleteHero = async (req, res) => {
  const hero = await heroModel.findByIdAndDelete(req.params._id);

  if (hero) {
    return res.status(201).send({
      success: true,
      message: "delete success",
      hero,
    });
  } else {
    return res.status(t00).send({
      success: false,
      message: "update failed",
    });
  }
};
