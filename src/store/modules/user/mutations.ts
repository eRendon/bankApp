import {Profile} from "@/interfaces/Profile";
import state from "@/store/modules/user/state";
import { BankAccountData } from '@/interfaces/BankAccount';

const mutations = {
    setProfile(profile: Profile): void {
        state.profile = profile
    },
    setBankAccount(bankAccount: BankAccountData): void {
        state.bankAccounts.push(bankAccount);
    },
    setBankAccounts(bankAccounts: BankAccountData[]): void {
        state.bankAccounts = [];
        state.bankAccounts = bankAccounts;
    }
}

export default mutations;
