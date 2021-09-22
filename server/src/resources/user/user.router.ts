import { Router } from "express";
import { me, updateMe, getMany, getOne, removeOne } from "./user.controller";

const router = Router();

router.get("/profile", me);
router.put("/profile", updateMe);

router.route("/user").get(getMany);

// /api/user/:id
router.route("/user/:id").get(getOne).delete(removeOne);

export default router;
