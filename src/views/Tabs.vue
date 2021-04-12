<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="transaction" href="/tabs/transaction">
          <ion-icon :icon="pushOutline" />
        </ion-tab-button>
          
        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon :icon="homeOutline" />
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="personCircleOutline" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage } from '@ionic/vue';
import { personCircleOutline, pushOutline, homeOutline } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      personCircleOutline,
      pushOutline,
      homeOutline,
    }
  }
}
</script>
