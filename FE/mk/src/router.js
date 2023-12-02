import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/users/homePage";
import { routers } from "./utils/router";
import MasterLayout from "./pages/users/homePage/theme/masterLayout";
import ProfilePage from "./pages/users/profilePage";

function renderUserRouter() {
    const userRouters = [
        {
            path: routers.USER.HOME,
            component: <HomePage />
        },
        {
            path: routers.USER.PROFILE,
            component: <ProfilePage />
        }
    ];

    return (
        <MasterLayout>
            <Routes>
                {userRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />
                ))}
            </Routes>
        </MasterLayout>
    );
}

const RouterCustom = () => {
    return renderUserRouter();
};

export default RouterCustom;