import express from 'express'
const router = express.Router();

router.get("/", async function (_, res) {
  // #swagger.description = 'Тестовый запрос'
  try {
    res.status(200).json({message: "Это сервер приложения"})
  } catch (err) {
    res.status(418).send("Сервер чуть не вскипел: "+err)
  }

})

export default router
