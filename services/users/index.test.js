const { getList } = require('./index');
const modUsers = require(`${global.__path}/models/users`);

describe('getList', () => {
  test('should be true', async () => {
    jest.spyOn(modUsers, 'find').mockImplementation(() => []);

    const users = await getList();
    expect(users).toEqual([]);
  });
});
