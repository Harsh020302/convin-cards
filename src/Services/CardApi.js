import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cardApi = createApi({
    reducerPath: 'cardApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api/users' }),
    endpoints: (builder)=>({

        getUserInfo: builder.query({
            query: (id) => {
                return `/${id}`
            }
        })
    })
})

export const {
    useGetUsersQuery,useGetUserInfoQuery
} = cardApi;