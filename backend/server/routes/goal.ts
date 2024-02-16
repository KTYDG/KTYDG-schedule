import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const router = express.Router();

router.get("/", async function (req, res) {
  // #swagger.tags = ['Goals']
  // #swagger.description = 'Получить все существующие цели'

  try {
    const goals = await prisma.goal.findMany();
    res.json(goals)
  } catch (err) {
    res.status(418).send("Сервер чуть не вскипел: "+err)
  }

})

router.post("/", async function (req, res) {
  // #swagger.tags = ['Goals']
  // #swagger.description = 'Создать новую цель'
  /* #swagger.parameters['body'] = {
    in: 'body',
    required: true,
    schema: {
        $heading: "Цель",
        $description: "Закончить документацию",
        $completed: false,
        $everyDay: false,
        $everyWeek: false,
        $onWeekDays: "Monday Tuesday",
        $date: "2024-01-30T00:00:00+00:00",
    }
  } */

  try {
    const goals = await prisma.goal.create({
      data: req.body,
    });
    res.json(goals)
  } catch (err) {
    res.status(418).send("Сервер чуть не вскипел: "+err)
  }
})

router.put("/", async function (req, res) {
  // #swagger.tags = ['Goals']
  // #swagger.description = 'Изменить цель'

  try {
    const { id, heading, description, everyDay, everyWeek, onWeekDays  } = req.body
    // const goals = await prisma.goal.update()
    // res.json(goals)
  } catch (err) {
    res.status(418).send("Сервер чуть не вскипел: "+err)
  }
})

export default router