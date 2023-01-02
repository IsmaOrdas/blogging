import { loginUser } from "../api/users";
import { UserForm } from "../types";
import { useUserStore } from "../../common/store/user";

export async function signinUser(form: UserForm) {
    try {
        const userStore = useUserStore();
        const response = await loginUser(form);

        if (response && response.user && response.token) {
            userStore.setLoggedUser({
                username: response.user.username,
                token: response.token
            })
        }
        return true
    } catch (e) {
        console.error(e);
    }
}
