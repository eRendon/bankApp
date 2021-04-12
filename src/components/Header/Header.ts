import { defineComponent } from 'vue';
import { IonIcon } from '@ionic/vue';
import { appsOutline } from 'ionicons/icons';

export default defineComponent({
    name: 'HeaderApp',
    components: {
        IonIcon
    },
    setup() {
        return {
            appsOutline
        }
    }
})
