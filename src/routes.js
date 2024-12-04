import {
    AboutUsPage,
    HomePage,
    CartPage
} from "./containers";

export const routes = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/about',
        element: <AboutUsPage />

    },
    {
        path: '/cart',
        element: <CartPage />
    }
]