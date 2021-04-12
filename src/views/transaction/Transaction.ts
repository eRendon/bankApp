import { IonPage, IonContent, IonLabel, IonSelectOption, IonSelect, IonItem } from '@ionic/vue';
import { computed, reactive, ref, toRefs, onMounted } from 'vue';
import { Transaction } from '@/interfaces/Transaction';
import { user } from '@/store';
import { BankAccountData } from '@/interfaces/BankAccount';
import {transaction} from "@/services";
import {Profile} from "@/interfaces/Profile";
import { useRoute } from 'vue-router'

export default {
    components: {
        IonPage,
        IonContent,
        IonLabel,
        IonSelect,
        IonSelectOption,
        IonItem
    },
    setup() {
        const route = useRoute()

        const transactionState = ref<Transaction>({
            balance: 0,
            from: '',
            to: '',
            currency: '',
            description: ''
        })

        const store = reactive({
            selectedAccount: {
                balance: 0
            } as BankAccountData
        })

        const accountBank = computed<BankAccountData[]>(() => user.getters.getBankAccount())
        const userState = computed<Profile>(() => user.getters.getProfile())

        transactionState.value.from = accountBank?.value[0] ? accountBank.value[0].accountNumber! : ''
        store.selectedAccount.balance = accountBank?.value[0] ? accountBank.value[0].balance! : 0
        const selectState = ref(false)

        const selectAccount = (account: BankAccountData): void => {
            store.selectedAccount = account
            selectState.value = false
            transactionState.value.from = account.accountNumber!
        }

        const isSelected = (account: BankAccountData): boolean => {
            return transactionState.value.from === account.accountNumber;

        }

        const sendTransaction = async (): Promise<void> => {
            transactionState.value.userId = userState.value.id
            await transaction.create(transactionState.value)
        }

        onMounted(() => {
            if (route.params.data){
                const data = JSON.parse(route.params.data as string)
                transactionState.value.to = data.account.accountNumber
                transactionState.value.balance = data.account.balance
                transactionState.value.currency = data.currency
                console.log(data)
                //     account:
                // accountNumber: "CJOKH4Fi6oC6GZOqIuD1"
                // alias: "Cuenta 1"
                // balance: 50000
                // description: "Mi primera cuenta"
                // type: 1
                // __proto__: Object
                // currency: "COP"
                // referenceQr: "Mi qr"
            }
        })

        return {
            transactionState,
            selectState,
            accountBank,
            selectAccount,
            isSelected,
            sendTransaction,
            ...toRefs(store)
        }
    }
}
