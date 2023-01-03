import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { serverApi } from '@/constants/axios.instance'

/**
 * kakao login
 */
export const kakaoLogin = createAsyncThunk('oauth/kakao', async (code: string) => {
  const response = await serverApi.get('/auth/kakao-login', { params: { code } })
  return await response.data.json()
})

export const naverLogin = createAsyncThunk('oauth/naver', async (code: string) => {
  const response = await serverApi.get('/auth/naver-login', { params: { code } })
  return await response.data.json()
})

export const googleLogin = createAsyncThunk('oauth/google', async (code: string) => {
  const response = await serverApi.get('/auth/google-login', { params: { code } })
  return await response.data.json()
})

export interface oauthState {
  loading: boolean
  userInfo: {
    id: string | number
    name: string
    email: string
  }
}

const initialState: oauthState = {
  loading: false,
  userInfo: {
    id: '',
    name: '',
    email: ''
  }
}

export const oauthSlice = createSlice({
  name: 'oauth',
  initialState,
  reducers: {},
  extraReducers: {
    [kakaoLogin.fulfilled.type]: (state, action) => {
      state.loading = true
      state.userInfo = { ...action.payload.userInfo }
    },
    [naverLogin.fulfilled.type]: (state, action) => {
      state.loading = true
      state.userInfo = { ...action.payload.userInfo }
    },
    [googleLogin.fulfilled.type]: (state, action) => {
      state.loading = true
      state.userInfo = { ...action.payload.userInfo }
    }
  }
})

export default oauthSlice
