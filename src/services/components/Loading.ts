import { loadingController } from '@ionic/vue'

let loading:  HTMLIonLoadingElement;

export default class Loading {
    static async present(message: string): Promise<void> {
        loading = await loadingController.create({
            spinner: 'bubbles',
            translucent: true,
            message
        })

        await loading.present()
    }

    static async dismiss(): Promise<void> {
        await loading.dismiss()
    }
}
