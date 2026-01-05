// import { useLoaderData } from "react-router-dom";
// import MainNavigation from "../components/MainNavigation";

import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

// function ErrorPage() {
//     const data = useLoaderData();

//     return (
//         <>
//             <MainNavigation />
//             <main>
//                 <h1>An error occurred</h1>
//                 <p>Could not find this page!</p>
//                 <p>{data.message}</p>
//             </main>
//         </>
//     )
// }

function ErrorPage() {
    const error = useRouteError();
    let title = "An error occurred";
    let message = "Something went wrong";

    if(error.status === 500) {
        message = error.data.message;
    }

    if(error.status === 404) {
        title = "Not found!";
        message = "Could not find resource or page";
    }

    return (
        <>
            <MainNavigation />
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
        </>
    )
}

export default ErrorPage;