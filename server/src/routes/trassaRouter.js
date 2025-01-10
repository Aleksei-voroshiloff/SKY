/* eslint-disable no-console */
/* eslint-disable consistent-return */
const express = require('express');
const trassaRouter = express.Router();
const { Trassa } = require('../../db/models');
const fs = require('fs/promises');
const sharp = require('sharp');
const upload = require('../middlewares/multer');
const { verifyAccessToken } = require('../middlewares/verifyTokens');

trassaRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const allTrassas = await Trassa.findAll();
      return res.json(allTrassas);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Ошибка при выведении всех trass' })
    }
  })
  .post(verifyAccessToken, upload.single('file'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: 'Нет файла' });
      }
      const name = `${Date.now()}.webp`;
      const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
      await fs.writeFile(`./public/${name}`, outputBuffer);
      const { title, address, description, coordinate } = req.body;
      const userId = res.locals.user.id;
      const newTrassa = await Trassa.create({
        title,
        address,
        description,
        coordinate,
        image: name,
        userId,
      });
      res.status(200).json(newTrassa);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Ошибка при добавлении карточки' });
    }
  });

trassaRouter.route('/coordinate').get(async (req, res) => {
  try {
    const allCoordinate = await Trassa.findAll();
    const arrCor = allCoordinate.map((el) => el.coordinate.split(' '));
    const result = arrCor.map((el) => el.map((val) => parseFloat(val)));
    return res.json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Ошибка при выведении всех trass' });
  }
});
trassaRouter
  .route('/:id')
  .get(async (req, res) => {
    try {
      const { id } = req.params;
      const oneTrassa = await Trassa.findByPk(id);
      if (oneTrassa.status === 200) res.json({ message: 'Карточка найдена' });
      res.json(oneTrassa);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Ошибка при выведении одной карточки' });
    }
  })
  .delete(async (req, res) => {
    try {
      const { id } = req.params;
      await Trassa.destroy({ where: { id } });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Ошибка при удалении' });
    }
  })
  .put(upload.single('file'), async (req, res) => {
    try {
      const { id } = req.params;
      const { title, address, description, coordinate } = req.body;
      if (!req.file) {
        await Trassa.update(
          { title, address, description, coordinate },
          { where: { id } },
        );
        const newItem = await Trassa.findByPk(id);
        return res.json(newItem);
      }
      const name = `${Date.now()}.webp`;
      const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
      await fs.writeFile(`./public/${name}`, outputBuffer);
      await Trassa.update(
        { title, address, description, coordinate, image: name },
        { where: { id } },
      );
      const updateTrassa = await Trassa.findByPk(id);
      res.json(updateTrassa);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Ошибка изменении' });
    }
  });

module.exports = trassaRouter;
