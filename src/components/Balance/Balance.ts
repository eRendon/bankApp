import { defineComponent, computed } from 'vue';
import { Profile } from '@/interfaces/Profile';
import { user } from '@/store';

export default defineComponent({
    name: 'Balance',
    setup() {
        const profile = computed<Profile>(() => user.getters.getProfile());

        return {
            profile
        }
    }
})
