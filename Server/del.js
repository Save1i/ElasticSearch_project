const client = require("./ElastcClient");

const deleteIndex = async () => {
    try {
      const response = await client.indices.delete({
        index: 'first_index' // Укажите имя индекса, который хотите удалить
      });
      console.log('Индекс удален:', response);
    } catch (error) {
      console.error('Ошибка при удалении индекса:', error);
    }
  };
  
  deleteIndex();
  