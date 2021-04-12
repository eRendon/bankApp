import {defineComponent, computed, ref} from 'vue';
import {
    IonSlides,
    IonSlide,
    IonCard,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonIcon,
    modalController,
    IonImg
} from '@ionic/vue';
import { addOutline } from 'ionicons/icons';
import { bankAccount } from "@/services";
import CreateBankAccount from "@/components/CreateBankAccount/CreateBankAccount.vue";
import { user } from "@/store";
import { BankAccountData } from "@/interfaces/BankAccount";
import Fab from '@/components/Buttons/Fab.vue';
import QRScanner from "@/components/QRScanner/QRScanner.vue";
import router from "@/router";

export default defineComponent({
    name: 'BankAccounts',
    components: {
        IonSlides,
        IonSlide,
        IonCard,
        IonCardContent,
        IonCardSubtitle,
        IonCardTitle,
        IonCardHeader,
        IonIcon,
        IonImg,
        Fab,
        QRScanner
    },
    setup() {
        const slideOpts = {
            initialSlide: 0,
            slidesPerView: 1.5,
            spaceBetween: 10,
            freeMode: true
        };

        const showQRScanner = ref(false);

        const accountsBank = computed<BankAccountData[]>(() => user.getters.getBankAccount());

        const createAccount = async (alias: string, description: string, type: number, userId: number) => {
            const response = await bankAccount.createBankAccount({ alias, description, type, userId })
            if (!response.data) {
                return;
            }
            user.actions.setAccount(response.data)
            console.log(response)
        }

        const alertDataAccount = async () => {
            const modalAccount = await modalController
                .create({
                    component: CreateBankAccount,
                    cssClass: 'my-custom-class',
                    componentProps: {
                        title: 'Crear Cuenta'
                    },
                });
            modalAccount.onDidDismiss().then((dataModal) => {
                console.log(dataModal.data)
                if (dataModal.data) {
                    const { alias, description, type, userId } = dataModal.data;

                    createAccount(alias, description, type, userId);
                }
            });

            return modalAccount.present();
        }

        const goToQRCode = async (): Promise<void> => {
            await router.push({
                name: 'QRCode'
            })
        }

        const onScanned = async (data: string): Promise<void> => {
            showQRScanner.value = false
            await router.push({
                name: 'transaction',
                params: {
                    data: data
                }
            })
        }

        return {
            slideOpts,
            addOutline,
            createAccount,
            alertDataAccount,
            accountsBank,
            showQRScanner,
            goToQRCode,
            onScanned
        }
    },
    async created() {
        await user.actions.getBankAccounts();
    }
})
