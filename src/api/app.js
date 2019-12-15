import { createApi } from "@/utils/request";
import config from '@/utils/config'
export default {
  like: createApi('user/like'),
  login: createApi('user/login'),
  register: createApi('user/register'),
  addDanmaku: createApi('source/addDanmaku'),
  listDanmakus: createApi('source/listDanmakus'),
  addOrUpdateGameCharacter: createApi('user/addOrUpdateGameCharacter'),
  editProfile: createApi('user/editProfile'),
  getUserAvatar: `${config.baseURL}user/getUserAvatar/{hash}.png`,
  getUserProfile: createApi('user/getUserProfile'),
  uploadUserAvatar: createApi('user/uploadUserAvatar'),
  verify: createApi('user/verify')
}
