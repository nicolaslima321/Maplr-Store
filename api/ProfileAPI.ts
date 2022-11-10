import { UserObject } from '~/types/entities';

const userAPI = {
  fetchProfileData(): Promise<UserObject> {
    return Promise.resolve({
      avatarImage: 'https://avatars.githubusercontent.com/u/23743072?v=4',
      id: 1,
      name: 'Nicolas Lima',
      email: 'nicolas.pedroso2145@gmail.com',
      login: 'nicolaslima321',
    });
  }
};

export default userAPI;
