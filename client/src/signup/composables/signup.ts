import { createUser } from "../api/users";
import { UserForm } from "../types";
import { signinUser } from "./login";
import { useUserStore } from "../../common/store/user";

export async function signupUser(form: UserForm) {
    try {
        const userStore = useUserStore();
        const response = await createUser(form);

        if (response && response.user && response.token) {
            userStore.setLoggedUser({
                username: response.user.username,
                token: response.token
            })
        }
    } catch (e) {
        console.error(e);
    }
}
