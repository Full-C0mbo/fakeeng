import { BrowserRouter, Routes, Route, Outlet, Navigate, useNavigate} from 'react-router-dom'
import Home from './Home'

function Router() {

    // Define the overall layout for how the pages should be structured
    const Layout = () => {
        return(
            <>
                <Outlet/>
            </>
        )
    }

    return(
        <BrowserRouter> {/* Using BrowserRouter, set up each possible route for the website */}
            <Routes>
                <Route element={<Layout/>}> {/* Target the layout function, substituting Outlet for the specified route depending on the page the user is viewing */}
                    <Route path="/" element={<Home/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )

}

export default Router;