import axios, { AxiosError } from 'axios'

const apiUrl = import.meta.env.VITE_APP_API

const axiosInstance = axios.create({
  baseURL: `${apiUrl}/`,
  withCredentials: true, // This ensures cookies are included
})

// Request interceptor
axiosInstance.interceptors.request.use((request) => {
  const IsAutoLogin = sessionStorage.getItem('IsAutoLogin')
  if (IsAutoLogin) {
    request.headers['IsAutoLogin'] = IsAutoLogin
  }

  // If you’re not using AbortController actively, remove this
  // const controller = new AbortController()
  // request.signal = controller.signal

  return request
})

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Custom logic for handling business errors
    if (response.data?.isSuccess === false) {
      return Promise.reject(
        new AxiosError(response.data.message || 'Request failed')
      )
    }
    return response
  },
  (error) => {
    if (axios.isCancel(error)) {
      // If the request was canceled, silently fail
      return Promise.reject()
    }

    if (error.response) {
      const status = error.response.status

      if (status === 401) {
        // Optional: handle redirect or notification here
        return Promise.reject('عدم احراز')
      } else if (status === 403) {
        return Promise.reject('عدم دسترسی به صفحه')
      } else if (status === 404) {
        return Promise.reject('سرویس یافت نشد')
      } else if (status >= 500 && status < 600) {
        return Promise.reject('خطای 500 سرور')
      }

      return Promise.reject(error.response.data || error.response)
    }

    console.warn('خطای بدون پاسخ از سرور')
    console.error(error)
    return Promise.reject(error)
  }
)

export default axiosInstance
