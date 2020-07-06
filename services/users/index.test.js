const { RequiredError } = require(`${global.__path}/utils/error`);
const modUsers = require(`${global.__path}/models/users`);

const { getList, get } = require('./index');

describe('getList', () => {
  test('should be true', async () => {
    jest.spyOn(modUsers, 'find').mockImplementation(() => []);

    const users = await getList();
    expect(users).toEqual([]);
  });
});

describe('get', () => {
  test('RequiredError if no email', async () => {
    await expect(get({})).rejects.toBeInstanceOf(RequiredError);
  });
});
