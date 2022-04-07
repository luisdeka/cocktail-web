import axios from 'axios'

const baseURL = import.meta.env.VITE_APP_API_URL
const defaultHttpRequestHeaders = {
  'Content-type': 'application/json',
}

const mergeHeaders = extraHeaders => ({
  ...defaultHttpRequestHeaders,
  ...(extraHeaders || {}),
})

const handleResponse = function (response, successHandler, errorHandler) {
  try {
    if (response.status) {
      if (!successHandler) {
        return response
      }

      return successHandler(response)
    }

    if (!errorHandler) {
      throw response
    }

    errorHandler(response)
  } catch (error) {
    if (!errorHandler) {
      throw error
    }

    errorHandler(error)
  }
}

export const getRequest = async (
  service,
  params,
  successHandler,
  errorHandler,
  extraHeaders,
) => {
  const response = await axios
    .create({ baseURL, headers: mergeHeaders(extraHeaders) })
    .get(service, { params })
  return handleResponse(response, successHandler, errorHandler)
}

export const patchRequest = async (
  service,
  data,
  successHandler,
  errorHandler,
  params,
  extraHeaders,
) => {
  const response = await axios
    .create({ baseURL, headers: mergeHeaders(extraHeaders) })
    .patch(service, { data, params })
  return handleResponse(response, successHandler, errorHandler)
}

export const postRequest = async (
  service,
  data,
  successHandler,
  errorHandler,
  extraHeaders,
  params,
) => {
  const response = await axios
    .create({ baseURL, headers: mergeHeaders(extraHeaders) })
    .post(service, { data, params })
  return handleResponse(response, successHandler, errorHandler)
}

export const putRequest = async (
  service,
  data,
  successHandler,
  errorHandler,
  extraHeaders,
  params,
) => {
  const response = await axios
    .create({ baseURL, headers: mergeHeaders(extraHeaders) })
    .put(service, { data, params })
  return handleResponse(response, successHandler, errorHandler)
}

export const deleteRequest = async (
  service,
  params,
  successHandler,
  errorHandler,
  extraHeaders,
) => {
  const response = await axios
    .create({ baseURL, headers: mergeHeaders(extraHeaders) })
    .delete(service, { params })
  return handleResponse(response, successHandler, errorHandler)
}
