import { alertController } from '@ionic/vue'

export default class {
    static async present(message: string, subHeader?: string, header?: string): Promise<void> {
        const alert = await alertController.create({
            header,
            subHeader,
            message
        })
        await alert.present()
    }
}
