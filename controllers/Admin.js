import { response } from "express";
import Admin from "../models/AdminModels.js";
import argon2 from "argon2";

export const getAdmin = async (req, res) => {
  try {
    const response = Admin.findAll({
      attributes: ["id_admin", "uuid", "username", "password", "role"],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({
      msg: "gagal mengirim",
    });
  }
};

export const getAdminByid = async (req, res) => {
  try {
    const response = Admin.findOne({
      where: {
        uuid: req.params.uuid,
      },

      attributes: ["id_admin", "uuid", "username", "password", "role"],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({
      msg: "gagal mengirim",
    });
  }
};

export const createAdmin = async (req, res) => {
  // const { username, password, confirmpassword } = req.body;
  console.log(req.body);
  // try {
  //   if (password !== confirmpassword) {
  //     return res.status(400).json({
  //       msg: "Password and confirm password do not match",
  //     });
  //   }

  //   let Haspassword;
  //   try {
  //     Haspassword = await argon2.hash(password);
  //   } catch (hashError) {
  //     return res.status(500).json({
  //       msg: "Error hashing the password",
  //     });
  //   }

  //   await Admin.create({
  //     username: username,
  //     password: Haspassword,
  //     role: "admin",
  //   });

  //   return res.status(200).json({ msg: "Successfully created admin" });
  // } catch (error) {
  //   console.log(error);
  //   return res.status(500).json({
  //     msg: "Failed to create admin",
  //   });
  // }
};

export const updateAdmin = async (req, res) => {};
export const deleteAdmin = async (req, res) => {};
