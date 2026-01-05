import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootLayout() {
    const { state } = useNavigation();
    return (
        <>
            <MainNavigation />
            <main>
                {state === 'loading' && <p>Is loading...</p>}
                <Outlet />
            </main>
        </>
    )
}
export default RootLayout;