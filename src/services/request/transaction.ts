import { apiClient } from "@/services/axios";
import { AxiosError, AxiosResponse } from "axios";
import { loading } from "@/services";

export default class Transaction {
    static async create(transaction: Transaction) {
        await loading.present('Cargando...')
        try {
            const { data } = await apiClient.post<AxiosResponse>('/transaction/create', transaction)
            console.log(data)
        } catch (err) {
            if (err && err.response) {
                const axiosError = err as AxiosError
                return axiosError.response?.data
            }
            throw err
        } finally {
            await loading.dismiss()
        }
    }
}
