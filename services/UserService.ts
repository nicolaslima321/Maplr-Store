import UserApi from "~/api/ProfileAPI";
import { UserObject } from '~/types/entities';
import { hasLoadedClient } from '~/utils/ssr';

class UserService {
  private user: UserObject | null;

  constructor() {
    this.user = this.loadCachedUser();
  }

  async loadResources() {
    if (Boolean(this.user)) {
      return this.user;
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

  loadCachedUser(): UserObject | null  {
    if (!hasLoadedClient) {
      return null;
    }

    const userJson = localStorage.getItem('user') ?? 'null';
    const cachedUser = JSON.parse(userJson);

    if (Boolean(cachedUser)) {
      return cachedUser;
    }

    return null;
  }

  destroyUserCache(): void {
    localStorage.removeItem('user');
  }

  private saveUserCache(user: any): void {
    if (!hasLoadedClient) {
      return;
    }

    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }
}

export default new UserService();
