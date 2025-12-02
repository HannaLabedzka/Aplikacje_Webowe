const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

//create - post
router.post('/', async (req, res) => {
    try{
        const category = await prisma.category.create({
            data: {category_name: req.params.category_name}
        })
        res.status(201).json(category)
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

//read all - get
router.get('/', async (req, res) => {
    const category = await prisma.category.findMany()
    res.json(category)
})

//read one - get z id
router.get('/:id', async (req, res) => {
    const category = await prisma.category.findUnique({
        where: { id: req.params.id }
    })
    if(!category){
        res.status(404).json({error: 'Nie znaleziono kategorii'})

    }
    res.json(category)
})

//update - put z id
router.put('/:id', async (req, res) => {
    try{
        const category = await prisma.category.update({
            where: { id: req.params.id },
            data: {category_name: req.params.category_name}
        })
        res.json(category)

    }catch(error){
        res.status(404).json({error: 'Nie znaleziono kategorii'})

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