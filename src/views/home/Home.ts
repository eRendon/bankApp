import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import Balance from "@/components/Balance/Balance.vue";
import BankAccounts from "@/components/BanckAccounts/BankAccounts.vue";

export default  {
    name: 'Tab1',
    components: {
        ExploreContainer,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonPage,
        Balance,
        BankAccounts
    }
}

