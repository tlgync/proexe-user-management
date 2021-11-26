import { Fetch } from '../components/Fetch';
import { BaseConfig } from '../config/BaseConfig';

export const UserService = {

  /**
   * [Get All Users]
   */
  GetUsers() {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    return Fetch(BaseConfig.service.user.getUsers, requestOptions);
  },

};

BaseConfig.service.user = {
  getUsers: BaseConfig.api.debug.user,
};
