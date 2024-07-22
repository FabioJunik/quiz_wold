import { getCookie, deleteCookie, setCookie } from 'cookies-next'

const QUIZWOLD_TOKEN = '@quizwold:token'
const EXPIRES = new Date(Date.now() + 60 * 60 * 1000)

export const tokenService = {

    saveToken(data: any, options: any = {}) {
        setCookie(QUIZWOLD_TOKEN, data, { expires: EXPIRES, ...options })
    },

    deleteToken(options = {}) {
        deleteCookie(QUIZWOLD_TOKEN, options)
    },
    getToken(){
        return getCookie(QUIZWOLD_TOKEN)
    }
}