import { apiClient } from '@/services/axios';
import { Register } from '@/interfaces/Register';
import { AxiosError, AxiosResponse } from 'axios'
import {alertApp, loading} from "@/services";

export default class Auth {
    static async logIn(userForm: any) {
        await loading.present('Cargando...')
        try {
            return await apiClient.post<AxiosResponse>('/accounts/authenticate', userForm);
        } catch (err) {
            if (err && err.response) {
                const axiosError = err as AxiosError
                await alertApp.present(axiosError.response?.data.message, '', 'Error')
                return axiosError.response?.data
            }
            throw err
        } finally {
            await loading.dismiss()
        }
    }

    static async register(registerForm: Register): Promise<AxiosResponse> {
        await loading.present('Cargando...')
        try {
            const { data } = await apiClient.post<AxiosResponse>('/accounts/register', registerForm);
            return data
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
