import { User } from "./user.model";

export const me = (req, res) => {
  res.status(200).json({ data: req.user });
};

export const updateMe = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user._id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    res.status(200).json({ data: user });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const getMany = async (req, res) => {
  try {
    const users = await User.find({ type: req.user.type }).lean().exec();

    res.status(200).json({ data: users });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const getOne = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email }).lean().exec();

    if (!user) {
      return res.status(400).end();
    }

    res.status(200).json({ data: user });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const removeOne = async (req, res) => {
  try {
    const removed = await User.findOneAndRemove({
      email: req.params.email,
    });

    if (!removed) {
      return res.status(400).end();
    }

    return res.status(200).json({ data: removed });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};
