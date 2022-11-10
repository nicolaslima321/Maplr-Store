type UserObject = {
  id: number,
  avatarImage: string,
  name: string,
  email: string,
  login: string,
  orders?: Array<Object> | [],
};

export default UserObject;
