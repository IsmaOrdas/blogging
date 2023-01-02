import { httpClient } from "../../common/http/http";
import { UserForm } from "../types";

enum Api {
    USER_LOGIN = '/users/login'
}

export const loginUser = (form: UserForm) => httpClient.post<any>(Api.USER_LOGIN, form);