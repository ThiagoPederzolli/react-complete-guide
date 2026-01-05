// Challenge / Exercise

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import EventDetailsPage, { loader as eventDetailsLoader, action as deletEventAction } from "./pages/EventDetails";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import ErrorPage from "./pages/Error";
import EventLayout from "./pages/EventLayout";
import { action as submitEventAction } from './components/EventForm'
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';
// 1. Add five new (dummy) page components (content can be simple <h1> elements) ✅
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages ✅
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components ✅
// 4. Add properly working links to the MainNavigation ✅
// 5. Ensure that the links in MainNavigation receive an "active" class when active✅
// 6. Output a list of dummy events to the EventsPage ✅
//    Every list item should include a link to the respective EventDetailPage ✅
// 7. Output the ID of the selected event on the EventDetailPage ✅
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components✅

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        // path: ''
        index: true, element: <HomePage />
      },
      {
        path: '/events',
        element: <EventLayout />,
        children: [
          {
            // path: ''
            index: true, element: <EventsPage />,
            // this loader would be accessible in components at
            // the same or lower level
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailsLoader,
            children: [
              {
                index: true,
                element: <EventDetailsPage />,
                action: deletEventAction,
              },
              {
                path: 'edit', element: <EditEventPage />, action: submitEventAction
              },

            ]
          },
          {
            path: 'new', element: <NewEventPage />, action: submitEventAction
          },
          
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },  
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
