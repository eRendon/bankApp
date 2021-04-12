import {Profile} from '@/interfaces/Profile';
import state from './state';
import { BankAccountData } from '@/interfaces/BankAccount';

const getters = {
    getProfile: (): Profile => state.profile,
    getBankAccount: (): BankAccountData[] => state.bankAccounts
}

export default getters;
