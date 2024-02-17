import axios from "axios"

export const API_SERVER_HOST = "http://localhost:8080"

const prefix = `${API_SERVER_HOST}/api/posts`

export const findOne = async (pno) => {
  const res = await axios.get(`${prefix}/${pno}`)
  return res.data;
}

export const findList = async (pageParam) => {
  const { page, size } = pageParam;

  const res = await axios.get(`${prefix}`, { params: { page, size } })
  return res.data;
}