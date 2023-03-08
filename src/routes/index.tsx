import { useRoutes, Navigate, redirect } from 'react-router-dom'
import { Suspense } from 'react'
import { Error404 } from './error'
import pageLoading from '@/assets/image/pageLoading.gif'


export interface Iroute {
  name?: string
  path: string
  element: React.ReactNode
  children?: Array<Iroute>
}

const getSuspenceWrap = (el: React.ReactNode) => {
  return <Suspense fallback={<div>loading</div>}>{el}</Suspense>
}

const routes: Array<Iroute> = [
  {
    path: '/',
    element: getSuspenceWrap(<div>app</div>),
    children: []
  },
  {
    path: '*',
    element: getSuspenceWrap(<Error404 />)
  }
]

const CreatRoutes = () => {
  return useRoutes(routes)
}

export { CreatRoutes }
