import { userInfo } from 'os';
import { UserType } from "@/types/user";

export interface AuthSlice {
    userInfo: undefined | UserType;
    setUserInfo: (userInfo)
}
