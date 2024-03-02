import { UserType } from "@/types/user";

export interface AuthSlice {
    userInfo: undefined | UserType;
    setUserInfo
}
