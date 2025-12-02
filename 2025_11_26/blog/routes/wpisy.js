const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

//create - post
router.post('/', async (req, res) => {
    try{
        const blogEntry = await prisma.blogEntry.create({
            data: {title: req.body.title, text: req.body.text, author: req.body.author}
        })
        res.status(201).json(blogEntry)
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

//read all - get
router.get('/', async (req, res) => {
    const blogEntry = await prisma.blogEntry.findMany()
    res.json(blogEntry)
})

//read one - get z id
router.get('/:id', async (req, res) => {
    const blogEntry = await prisma.blogEntry.findUnique({
        where: { id: req.params.id }
    })
    if(!blogEntry){
        res.status(404).json({error: 'Nie znaleziono wpisu'})

    }
    res.json(blogEntry)
})

//update - put z id
router.put('/:id', async (req, res) => {
    try{
        const blogEntry = await prisma.blogEntry.update({
            where: { id: req.params.id },
            data: {title: req.body.title, text: req.body.text, author: req.body.author}
        })
        res.json(blogEntry)

    }catch(error){
        res.status(404).json({error: 'Nie znaleziono wpisu'})

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