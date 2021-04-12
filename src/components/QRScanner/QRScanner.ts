import  { defineComponent, reactive, ref, toRefs } from 'vue';
import { IonIcon } from "@ionic/vue";
import { closeCircleOutline } from "ionicons/icons";

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { QrStream, QrCapture, QrDropzone } from 'vue3-qr-reader'

export default defineComponent({
    name: 'QRScanner',
    components: {
        QrStream,
        QrCapture,
        QrDropzone,
        IonIcon
    },
    setup(props, { emit }) {
        const stateCamera = reactive({
            camera: 'auto'
        });
        const result = reactive({
            data: null
        })
        const showScanConfirmation  = ref(false)
        const errorMessage = ref('');
        const onInit = async (promise: any) => {
            promise.then(() => {
                console.log('Successfully initilized! Ready for scanning now!')
            })
                .catch((error: any) => {
                    if (error.name === 'NotAllowedError') {
                        errorMessage.value = 'Hey! I need access to your camera'
                    } else if (error.name === 'NotFoundError') {
                        errorMessage.value = 'Do you even have a camera on your device?'
                    } else if (error.name === 'NotSupportedError') {
                        errorMessage.value = 'Seems like this page is served in non-secure context (HTTPS, localhost or file://)'
                    } else if (error.name === 'NotReadableError') {
                        errorMessage.value = 'Couldn\'t access your camera. Is it already in use?'
                    } else if (error.name === 'OverconstrainedError') {
                        errorMessage.value = 'Constraints don\'t match any installed camera. Did you asked for the front camera although there is none?'
                    } else {
                        errorMessage.value = 'UNKNOWN ERROR: ' + error.message
                    }
                })
        }

        const pause = () => {
            stateCamera.camera = 'off'
        }

        const onDecode  = (content: null): void => {
            console.log("decode---", content)
            result.data = content
            pause();
            emit('scanned', content);
        }

        const onDetect = async (promise: any) => {
            try {
                const {
                    content,      // decoded String
                    location      // QR code coordinates
                } = await promise
                console.log(content)
                console.log(location)

                // ...
            } catch (error) {
                // ...
                }
            }

        return {
            showScanConfirmation ,
            onInit,
            onDecode,
            ...toRefs(result),
            ...toRefs(stateCamera),
            closeCircleOutline,
            onDetect
        }
    }
})
