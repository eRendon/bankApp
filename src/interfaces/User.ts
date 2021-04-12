import { Profile } from '@/interfaces/Profile';
import { BankAccountData } from './BankAccount';

export interface User {
    profile: Profile;
    bankAccounts: BankAccountData[];
}
