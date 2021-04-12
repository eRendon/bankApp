import { defineComponent } from 'vue'
import QrcodeVue from 'qrcode.vue'
import { BankAccountData } from "@/interfaces/BankAccount";

export default defineComponent({
    name: 'QRCode',
    props: {
        value: {
            type: Object,
            default: () => ({
                account: {} as BankAccountData,
                referenceQr: '',
                currency: ''
            })
        },
        size: {
            type: Number,
            default: 300
        }
    },
    components: {
        QrcodeVue
    }
})
