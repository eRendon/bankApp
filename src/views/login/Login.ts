import { defineComponent, ref } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonBackButton, IonButtons } from '@ionic/vue';
import LoginForm from "@/components/Forms/LoginForm.vue";
import { useRouter } from 'vue-router'

export default defineComponent({
    name: 'Login',
    components: {
        IonPage,
        IonContent,
        IonHeader,
        IonTitle,
        IonToolbar,
        IonButton,
        IonBackButton,
        IonButtons,
        LoginForm
    },
    setup() {
        const router = useRouter()
        const isForm = ref<boolean>(false);
        const goToRegister = async (): Promise<void> => {
            await router.push({
                name: 'register'
            })
        }
        return {
            isForm,
            goToRegister
        }
    }
})
