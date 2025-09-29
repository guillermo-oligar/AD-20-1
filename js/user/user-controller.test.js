const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

test("add user if not on the list", () => {
  let userController = new UserController();
  const newUser = new User (1234, "user not in the list", "testing@generation.org");
  expect(userController.getUsers()).not.toContain(newUser);
  userController.add(newUser);
  expect(userController.getUsers()).toContain(newUser);
});


test("remove user who's not in the list", () => {
  const userController = new UserController(); // lista vacía
  const nonExistentUser = new User(1111, "Juan", "juan@generation.org");
  userController.remove(nonExistentUser);
  expect(userController.getUsers()).toHaveLength(0);
});


//para users

test("findByEmail returns the correct user if email exists", () => {
  const userController = new UserController();
  const user = new User(1, "MK", "MK@generation.org");
  userController.add(user);

  expect(userController.findByEmail("MK@generation.org")).toBe(user);
});

test("findByEmail returns undefined if email does not exist", () => {
  const userController = new UserController();
  const user = new User(1, "Alice", "alice@generation.org");
  userController.add(user);

  expect(userController.findByEmail("bob@generation.org")).toBeUndefined();
});


test("findById returns the correct user if id exists", () => {
  const userController = new UserController();
  const user = new User(2, "Juan", "juan@generation.org");
  userController.add(user);

  expect(userController.findById(2)).toBe(user);
});

test("findById returns undefined if id does not exist", () => {
  const userController = new UserController();
  const user = new User(2, "Bob", "bob@generation.org");
  userController.add(user);

  expect(userController.findById(999)).toBeUndefined();
});