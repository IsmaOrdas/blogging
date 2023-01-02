import { httpClient } from "../../common/http/http";
import { UserForm } from "../../common/types";

enum Api {
    USER = '/users/',
}

export const createUser = (form: UserForm) => httpClient.post<any>(Api.USER, form);