'use strict';

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Иван Иванов',
          email: 'ivan@example.com',
          password: await bcrypt.hash('123', 10),
          role: true,
        },
        {
          name: 'Мария Петрова',
          email: 'maria@example.com',
          password: await bcrypt.hash('123', 10),

          role: false,
        },
        {
          name: 'Алексей Смирнов',
          email: 'alexey@example.com',
          password: await bcrypt.hash('123', 10),
          role: false,
        },
      ],
      {},
    );
    await queryInterface.bulkInsert(
      'Trassas',
      [
        {
          title: 'Лыжная трасса в Лысых Горах',
          address: 'Лысые Горы, Нижегородская область',
          description: 'Разнообразные маршруты для лыжников разного уровня подготовки.',
          image: 'url_to_image_lysyye_gory.jpg',
          userId: 2, 
        },
        {
          title: 'Лыжная трасса в Сосновом Бору',
          address: 'Сосновый Бор, Нижегородская область',
          description: 'Трасса окружена живописными сосновыми лесами.',
          image: 'url_to_image_sosnovy_bor.jpg',
          userId: 2,
        },
        {
          title: 'Лыжная трасса на Воскресенских холмах',
          address: 'Воскресенские холмы, Нижегородская область',
          description: 'Известна своими крутыми спусками и подъемами.',
          image: 'url_to_image_voskresenskie_kholmy.jpg',
          userId: 3,
        },
        {
          title: 'Лыжная трасса в Гороховце',
          address: 'Гороховец, Нижегородская область',
          description: 'Хорошо подготовленные трассы и комфортные условия для отдыха.',
          image: 'url_to_image_gorokhovets.jpg',
          userId: 3,
        },
      ],
      {},
    );
    await queryInterface.bulkInsert(
      'Comments',
      [
        {
          text: 'Отличная трасса! Очень понравилось кататься по разнообразным маршрутам. Особенно рекомендую начинающим лыжникам, так как есть много легких участков. Сервис на высоте, есть возможность проката оборудования.',
          userId: 3, 
          trassaId: 1, 
        },
        {
          text: 'Мне не понравилось. Трасса была слишком короткой и скучной. Не хватало сложных участков, чтобы сделать катание более интересным. В следующий раз выберу что-то другое.',
          userId: 2,
          trassaId: 1,
        },
        {
          text: 'Хорошая трасса для тренировок. Прекрасные условия для подготовки к соревнованиям. Очень понравилось кататься среди сосен, свежий воздух и отличные виды. Обязательно вернусь!',
          userId: 3,
          trassaId: 2,
        },
        {
          text: 'Сложная, но интересная трасса. Отлично подходит для опытных лыжников. Крутые спуски и подъемы делают катание захватывающим. Но будьте осторожны, некоторые участки требуют хорошей физической подготовки!',
          userId: 2,
          trassaId: 3,
        },
        {
          text: 'Прекрасное место для семейного отдыха. Трасса хорошо подготовлена, есть места для отдыха и кафе. Дети были в восторге, мы провели отличный день на свежем воздухе!',
          userId: 2,
          trassaId: 4,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
