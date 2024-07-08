import { TUserForm } from "./TUserForm";

export type TUserInfoSliceState = {
    user: TUserForm;
    isOnline: boolean;
    isCash: boolean;
    rating: number;
}