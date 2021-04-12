<template>
  <ion-fab vertical="bottom" edge horizontal="end">
    <ion-fab-button class="fab__button">
      <ion-icon :icon="addOutline" />
    </ion-fab-button>

    <ion-fab-list side="top">
      <ion-fab-button @click="$emit('addAccount')" data-desc="Crear cuenta">
        <ion-icon :icon="addOutline" />
      </ion-fab-button>
      <ion-fab-button @click="$emit('qrCode')" data-desc="Enviar">
        <ion-icon :icon="qrCodeOutline" />
      </ion-fab-button>
        <ion-fab-button @click="$emit('generateQr')" data-desc="Generar Qr">
          <ion-icon :icon="qrCodeOutline" />
        </ion-fab-button>
    </ion-fab-list>
  </ion-fab>
</template>

<script>
import {
  IonFab, IonFabButton, IonFabList, IonIcon
} from '@ionic/vue';
import { addOutline, qrCodeOutline } from 'ionicons/icons';

export default {
  name: "Fab",
  components: { IonFab, IonFabButton, IonFabList, IonIcon },
  setup() {
   return {
     addOutline,
     qrCodeOutline
   }
  }
}
</script>

<style scoped lang="scss">
.fab {
  &__button {
    --background: #E5E5E5;
    --color: #FF6310;
  }
}

ion-fab-button[data-desc] {
  position: relative;
}

ion-fab-button[data-desc]::after {
  position: absolute;
  content: attr(data-desc);
  z-index: 1;
  right: 55px;
  bottom: 4px;
  background-color: var(--ion-color-dark);
  padding: 9px;
  border-radius: 15px;
  color: white;
  box-shadow: 0 3px 5px -1px rgba(0,0,0,0.2), 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12);
}
</style>
