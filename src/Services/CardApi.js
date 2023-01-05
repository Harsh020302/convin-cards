import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cardApi = createApi({
    reducerPath: 'cardApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api/users' }),
    endpoints: (builder)=>({

        getUserInfo: builder.query({
            query: (id) => {
                if(id!== '0'){
                    return `/${id}`
                }
                return `/0`
            }
        })
    })
})

export const {
    useGetUsersQuery,useGetUserInfoQuery
} = cardApi;