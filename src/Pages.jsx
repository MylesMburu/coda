import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider,
  } from 'react-router-dom'
import { Home } from './Components/Home'
import { About } from './Components/About'
import { Contacts } from './Components/Contacts'

import { RootLayout } from './RootLayout'

 const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contacts' element={<Contacts />} />
      </Route>
    )
  )

export const Pages = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
