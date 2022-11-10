import UserApi from "~/api/ProfileAPI";
import { UserObject } from '~/types/entities';

class UserService {
  private user: UserObject;

  constructor() {
    this.user = this.loadCachedUser();
  }

  async loadResources() {
    if (this.hasCachedUser()) {
      return this.loadCachedUser();
    }

    try {
      const resources = await UserApi.fetchProfileData();
      this.saveUserCache(resources);

      return resources;
    } catch(error) {
      console.error(error);
    }
  }

  hasCachedUser() {
    return Boolean(this.loadCachedUser());
  }

  loadCachedUser(): UserObject  {
    return this.user ?? this.loadCachedUser();
  }

  private saveUserCache(user: any): void {
    this.user = user;
    localStorage.setItem('user', user);
  }
}

export default new UserService();
