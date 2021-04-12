import {Profile} from "@/interfaces/Profile";
import mutations from "./mutations";
import { BankAccountData } from '@/interfaces/BankAccount';
import { bankAccount } from "@/services";
import {user} from "@/store";
import { LocalStore } from "@/utils/localStore";
import router from '@/router';

const storage = new LocalStore<Profile, Profile>();

const actions = {
    setLogin(profile: Profile): void {
        profile.balance = 0;
        mutations.setProfile(profile);
        storage.setItem(profile, 'profile')
    },
    setAccount(backAccount: BankAccountData): void {
        mutations.setBankAccount(backAccount);
    },
    getUser(): void {
        const user = storage.getItem('profile');
        console.log(user)
        if (user) {
            this.setLogin(user);
        }
    },
    async getBankAccounts(): Promise<void> {
        const { id } = user.getters.getProfile();
        const response = await bankAccount.getBankAccounts(id!);
        mutations.setBankAccounts(response)
        console.log('actions response', response)
    },
    async logOut(): Promise<void> {
        try {
            await router.push({
                name: 'login'
            })
        } catch (e) {
            console.log('error logout', e)
        }
    }
}

export default actions;
