import { apiClient } from '@/services/axios';
import { BankAccountData } from '@/interfaces/BankAccount';
import { AxiosError, AxiosResponse } from "axios";
import { loading } from "@/services";

export default class BankAccount {
    static async createBankAccount(params: BankAccountData): Promise<AxiosResponse> {
        await loading.present('Cargando...')
        try {
            const { data } = await apiClient.post<AxiosResponse>('/accountsBank/create', params)
            return data
        } catch (err) {
            await loading.dismiss()
            if (err && err.response) {
                const axiosError = err as AxiosError
                return axiosError.response?.data
            }
            throw err
        } finally {
            await loading.dismiss()
        }
    }

    static async getBankAccounts(id: number): Promise<BankAccountData[]> {
        await loading.present('Cargando...')
        try {
            const { data } = await apiClient.get<BankAccountData[]>(`accountsBank/getAll/${id}`, )
            return data;
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
