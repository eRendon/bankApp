import {
    IonPage,
    IonContent,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonCheckbox,
    IonList,
    IonInput
} from '@ionic/vue'
import { BankAccountData } from '@/interfaces/BankAccount';
import { computed, ref } from 'vue';
import { user } from "@/store";
import QRCode from '@/components/QRCode/QRCode.vue';

export default {
    components: {
        IonPage,
        IonContent,
        IonItem,
        IonLabel,
        IonSelect,
        IonSelectOption,
        IonCheckbox,
        IonList,
        IonInput,
        QRCode
    },
    setup() {
        const haveValue = ref<boolean>(false)
        const accounts = computed<BankAccountData[]>(() => user.getters.getBankAccount())
        const accountSelected = ref<BankAccountData>({
            balance: 0,
            userId: 0,
            accountNumber: '',
            alias: '',
            description: '',
            type: 0
        })
        const referenceQr = ref('')
        const isQrGenerated = ref<boolean>(false)
        const qrData = ref({
            account: {} as BankAccountData,
            referenceQr: '',
            currency: ''
        });
        const typeCurrency = ref('')

        const generateQR = (): void => {
            console.log(qrData.value)
            qrData.value.account = accountSelected.value
            qrData.value.referenceQr = referenceQr.value
            qrData.value.currency = typeCurrency.value
            isQrGenerated.value = true
        }

        return {
            accounts,
            generateQR,
            haveValue,
            referenceQr,
            isQrGenerated,
            accountSelected,
            typeCurrency,
            qrData
        }
    }
}
