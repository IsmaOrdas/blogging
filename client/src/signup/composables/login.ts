import { loginUser } from "../api/users";
import { UserForm } from "../types";

export async function signinUser(form: UserForm) {
    try {
        const response = await loginUser(form);
        return response;
    } catch (e) {
        console.error(e);
    }
}
