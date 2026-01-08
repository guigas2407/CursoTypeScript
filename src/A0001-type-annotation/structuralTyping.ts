type VerifyUserFn = (user: User, sentValues: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValues) => {
  return (
    user.username === sentValues.username &&
    user.password === sentValues.password
  );
};

const bdUser = { username: "João", password: "123456" };
const sentUser = { username: "João", password: "123456" };
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
