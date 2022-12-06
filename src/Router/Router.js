import { createBrowserRouter } from 'react-router-dom'
import AddService from '../components/Pages/AddService/AddService'
import Blogs from '../components/Pages/Blogs/Blogs'
import Home from '../components/Pages/Home/Home/Home'
import Login from '../components/Pages/Login/Login'
import MyReview from '../components/Pages/MyReview/MyReview'
import UpdateReview from '../components/Pages/MyReview/UpdateReview.js/UpdateReview'
import ServicesDetails from '../components/Pages/Services/ServiceDetails/ServicesDetails'
import Services from '../components/Pages/Services/Services'
import SignUp from '../components/Pages/SignUp/SignUp'
import Main from '../Layout/Main'
import PrivateRoutes from './PrivateRoutes'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('https://cyclone-tour-server.vercel.app/services')
            },
            {

                path: '/services/:id',
                element: <ServicesDetails></ServicesDetails>,
                loader: ({ params }) => fetch(`https://cyclone-tour-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/reviews',
                element: <PrivateRoutes><MyReview></MyReview></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/addservice',
                element: <PrivateRoutes><AddService></AddService></PrivateRoutes>
            },
            {
                path: '/update/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({ params }) => fetch(`https://cyclone-tour-server.vercel.app/reviews/${params.id}`)
            }
        ]
    }
])