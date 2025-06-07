// index.js или elastic.js
const { Client } = require('@elastic/elasticsearch');
require('dotenv').config(); // Для загрузки переменных окружения

const client = new Client({
  node: process.env.ELASTIC_URL,
});

module.exports = client

const createIndex = async () => {
    try {
      const response = await client.indices.create({
        index: 'med_index',
        body: {
          mappings: {
            properties: {
              title: {
                type: 'text',
                fields: {
                  keyword: {
                    type: 'keyword',
                  },
                },
              },
            },
          },
        },
      });
      console.log('Индекс создан:', response);
    } catch (error) {
      console.error('Ошибка при создании индекса:', error);
    }
  };
  
  const bulkInsertAntibiotics = async () => {
    const body = [
      { index: { _index: 'first_index', _id: 1 } },
      { title: 'Азитромицин' },
      { index: { _index: 'first_index', _id: 2 } },
      { title: 'Гентамицин' },
      { index: { _index: 'first_index', _id: 3 } },
      { title: 'Доксициклин' },
      { index: { _index: 'first_index', _id: 4 } },
      { title: 'Канамицин' },
      { index: { _index: 'first_index', _id: 5 } },
      { title: 'Колистин' },
      { index: { _index: 'first_index', _id: 6 } },
      { title: 'Левофлоксацин' },
      { index: { _index: 'first_index', _id: 7 } },
      { title: 'Линкомицин' },
      { index: { _index: 'first_index', _id: 8 } },
      { title: 'Неомицин' },
      { index: { _index: 'first_index', _id: 9 } },
      { title: 'Нозигептид' },
      { index: { _index: 'first_index', _id: 10 } },
      { title: 'Окситетрациклин' },
      { index: { _index: 'first_index', _id: 11 } },
      { title: 'Паромомицин' },
      { index: { _index: 'first_index', _id: 12 } },
      { title: 'Пенициллины' },
      { index: { _index: 'first_index', _id: 13 } },
      { title: 'Салиномицин' },
      { index: { _index: 'first_index', _id: 14 } },
      { title: 'Спектиномицин' },
      { index: { _index: 'first_index', _id: 15 } },
      { title: 'Стрептомицин' },
      { index: { _index: 'first_index', _id: 16 } },
      { title: 'Сульфадимидин' },
      { index: { _index: 'first_index', _id: 17 } },
      { title: 'Сульфаниламиды' },
      { index: { _index: 'first_index', _id: 18 } },
      { title: 'Тетрациклин' },
      { index: { _index: 'first_index', _id: 19 } },
      { title: 'Тиамулин' },
      { index: { _index: 'first_index', _id: 20 } },
      { title: 'Тилдипирозин' },
      { index: { _index: 'first_index', _id: 21 } },
      { title: 'Тилмикозин' },
      { index: { _index: 'first_index', _id: 22 } },
      { title: 'Тилозин' },
      { index: { _index: 'first_index', _id: 23 } },
      { title: 'Триметоприм' },
      { index: { _index: 'first_index', _id: 24 } },
      { title: 'Тулатромицин' },
      { index: { _index: 'first_index', _id: 25 } },
      { title: 'Флорфеникол' },
      { index: { _index: 'first_index', _id: 26 } },
      { title: 'Флюмеквин' },
      { index: { _index: 'first_index', _id: 27 } },
      { title: 'Цефалоспорины' },
      { index: { _index: 'first_index', _id: 28 } },
      { title: 'Цефтиофур' },
      { index: { _index: 'first_index', _id: 29 } },
      { title: 'Ципрофлоксацин' },
      { index: { _index: 'first_index', _id: 30 } },
      { title: 'Энрофлоксацин' },
      { index: { _index: 'first_index', _id: 31 } },
      { title: 'Эритромицин' }
    ];
  
    try {
      const { body: result } = await client.bulk({ refresh: true, body });
  
      if (result.errors) {
        const errored = result.items.filter(i => i.index && i.index.error);
        console.error('Ошибки при вставке:', errored);
      } else {
        console.log('Все антибиотики успешно добавлены');
      }
    } catch (err) {
      console.error('Ошибка bulk-запроса:', err);
    }
  };
  
//   (async () => {
//     await createIndex();
//     await bulkInsertAntibiotics();
//   })();
  