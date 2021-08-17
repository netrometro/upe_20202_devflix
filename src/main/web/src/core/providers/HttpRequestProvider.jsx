import React from 'react'
import {QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient()

const HttpRequestProvider = (props) => {
  return <QueryClientProvider client={queryClient} {...props} />
}

export default HttpRequestProvider
