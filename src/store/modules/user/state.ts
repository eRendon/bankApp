import { reactive } from 'vue';
import { User } from "@/interfaces/User";

const state = reactive<User>({
    profile: {
        created: undefined,
        email: '',
        firstName: '',
        id: undefined,
        isVerified: true,
        jwtToken: '',
        lastName: '',
        role: '',
        title: '',
        updated: undefined
    },
    bankAccounts: []
})

export default state;
