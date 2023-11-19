import {
  getAdmin,
  getAdminByid,
  updateAdmin,
  createAdmin,
  deleteAdmin,
} from "../controllers/Admin.js";
import express from "express";

const router = express.Router();

router.get("/admin", getAdmin);
router.get("/admin/:id", getAdminByid);
router.post("/admin", createAdmin);
router.patch("/admin/:id", updateAdmin);
router.delete("/admin/:id", deleteAdmin);

export default router;
