const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

//create - post
router.post('/', async (req, res) => {
    try{
        const user = await prisma.user.create({
            data: {email: req.body.email, name: req.body.name}
        })
        res.status(201).json(user)
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

//read all - get
router.get('/', async (req, res) => {
    const user = await prisma.user.findMany()
    res.json(user)
})

//read one - get z id
router.get('/:id', async (req, res) => {
    const user = await prisma.user.findUnique({
        where: { id: req.params.id }
    })
    if(!user){
        res.status(404).json({error: 'Nie znaleziono użytkownika'})

    }
    res.json(user)
})

//update - put z id
router.put('/:id', async (req, res) => {
    try{
        const user = await prisma.user.update({
            where: { id: req.params.id },
            data: {email: req.body.email, name: req.body.name}
        })
        res.json(user)

    }catch(error){
        res.status(404).json({error: 'Nie znaleziono użytkownika'})

    }
})

//delete - delete z id
router.delete('/:id', async (req, res) => {
    await prisma.user.delete({
        where: { id: req.params.id }
    })

    res.status(204).end() //no content -> poprawnie usuniete
})

module.exports = router;