import {defineComponent, ref} from 'vue';
import { auth } from "@/services";
import {useRouter} from "vue-router";
import {user} from "@/store";

export default defineComponent({
    name: 'LoginForm',
    setup() {
        const userForm = ref({
            email: '',
            password: ''
        })
        const router = useRouter();

        const logIn = async () => {
           const data = await auth.logIn(userForm.value)
            console.log('asasd', data)
            if (data.message) {
                return;
            }
            const { data: userData } = data;
            console.log(userData)
            user.actions.setLogin(userData);
            await router.push({
                name: 'dashboard'
            })
        }
        return {
            userForm,
            logIn
        }
    }
})
