import {computed, defineComponent, ref} from 'vue';
import { IonPage, IonInput, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonBackButton, IonButtons } from '@ionic/vue';
import { Register } from "@/interfaces/Register";
import { auth } from "@/services";
import { useRouter } from "vue-router";
import * as V from 'vee-validate/dist/vee-validate'
import { defineRule } from "vee-validate/dist/vee-validate";
import { email, required } from '@vee-validate/rules'

export default defineComponent({
    name: 'RegisterPage',
    components: {
        IonPage,
        IonContent,
        IonHeader,
        IonTitle,
        IonToolbar,
        IonButton,
        IonBackButton,
        IonButtons,
        IonInput,
        VField: V.Field,
        VForm: V.Form,
        VErrorMessage: V.ErrorMessage
    },
    setup() {

        const router = useRouter()

        const registerForm = ref<Register>({
            email: '',
            password: '',
            confirmPassword: '',
            acceptTerms: true,
            firstName: '',
            lastName: '',
            title: 'Develop Bank'
        });

        const validateSubmit = computed( (): boolean => {
            return !(registerForm.value.email &&
                registerForm.value.lastName &&
                registerForm.value.firstName &&
                registerForm.value.password &&
                registerForm.value.confirmPassword);

        })

        const register = async (data: any): Promise<void> => {
            console.log(data)
            const response = await auth.register(registerForm.value!);
            console.log(response)
            if (response) {
                await router.push({
                    name: 'login'
                })
            }
        }

        defineRule('email', email)
        defineRule('required', required)

        return {
            registerForm,
            register,
            email,
            required,
            validateSubmit
        }
    }
})
