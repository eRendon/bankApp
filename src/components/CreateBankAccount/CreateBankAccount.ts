import { defineComponent, ref } from 'vue';
import {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonButtons,
    modalController,
    actionSheetController
} from '@ionic/vue';
import { close, albumsOutline } from 'ionicons/icons';
import { BankAccountData } from "@/interfaces/BankAccount";
import { user } from '@/store';

export default defineComponent({
    name: 'CreateBankAccount',
    components: { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton },
    props: {
        title: { type: String, default: 'Super Modal' },
    },
    setup() {
        const { id } = user.getters.getProfile();
        const accountData = ref<BankAccountData>({
            alias: '',
            description: '',
            type: 0,
            userId: 0
        })

        const actionTypeSheet = async () => {
            const actionSheet = await actionSheetController
                .create({
                    header: 'Tipo de cuenta',
                    buttons: [
                        {
                            text: 'Ahorros',
                            role: 'destructive',
                            icon: albumsOutline,
                            handler: () => {
                                accountData.value.type = 0;
                                console.log('Delete clicked')
                            },
                        },
                        {
                            text: 'Corriente',
                            icon: albumsOutline,
                            handler: () => {
                                accountData.value.type = 1;
                                console.log('Share clicked')
                            },
                        },
                        {
                            text: 'Cancel',
                            icon: close,
                            role: 'cancel',
                            handler: () => {
                                console.log('Cancel clicked')
                            },
                        },
                    ],
                });

            await actionSheet.present();
        }

        const closeModal = async () => {
            await modalController.dismiss();
        }

        const createAccount = async () => {
            accountData.value.userId = id;
            await modalController.dismiss(accountData.value)
        }

        return {
            closeModal,
            accountData,
            createAccount,
            actionTypeSheet
        }
    }
})
