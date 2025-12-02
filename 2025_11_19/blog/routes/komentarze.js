const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

//create - post
router.post('/', async (req, res) => {
    try{
        const comment = await prisma.comment.create({
            data: {content: req.body.content, published: req.body.published, authorId: req.user.id}
        })
        res.status(201).json(comment)
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

//read all - get
router.get('/', async (req, res) => {
    const comment = await prisma.comment.findMany()
    res.json(comment)
})

//read one - get z id
router.get('/:id', async (req, res) => {
    const comment = await prisma.comment.findUnique({
        where: { id: req.params.id }
    })
    if(!comment){
        res.status(404).json({error: 'Nie znaleziono komentarza'})

    }
    res.json(comment)
})

//update - put z id
router.put('/:id', async (req, res) => {
    try{
        const comment = await prisma.comment.update({
            where: { id: req.params.id },
            data: {category_name: req.params.category_name}
        })
        res.json(comment)

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