import { Await, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from '../components/EventItem'
import EventsList from "../components/EventsList";
import { Suspense } from "react";
function EventDetailsPage() {
    const {event, events} = useRouteLoaderData('event-detail');
    return (
        <>
            <Suspense fallback={<p style={{ textAlign: 'center'}}>Loading..</p>}>
                <Await resolve={event}>
                    {(loadedEvent) => <EventItem event={loadedEvent.event} />}
                </Await>
            </Suspense>
            <Suspense fallback={<p style={{ textAlign: 'center'}}>Loading..</p>}>
                <Await resolve={events}>
                    {(loadedEvents) => <EventsList events={loadedEvents.events} />}
                </Await>
            </Suspense>
        </>
    )
}

export default EventDetailsPage;

async function loadEvent(id) {
    const response = await fetch(`http://localhost:8080/events/${id}`);
    if (!response.ok) {

        throw new Response(JSON.stringify({message: 'Could not fetch details for selected event'}),
        {
            status: 500,
        })

    } else {
        const resData = await response.json();
      return resData;
    }
}

// log to loadEvents on Events Page
// for comments about the logic
async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {

        throw new Response(JSON.stringify({message: 'Could not fetch events'}),
        {
            status: 500,
        })
    } else {
      const resData = await response.json();
      return resData;
    }
}

export async function loader({request, params}) {
    const { eventId } = params;
    const event = await loadEvent(eventId);
    return ({
        event,
        events: loadEvents()
    })
}

export async function action({request, params}) {
    const {eventId} = params;
    const response = await fetch(`http://localhost:8080/events/${eventId}`, {
        method: request.method
    });
    if (!response.ok) {

        throw new Response(JSON.stringify({message: 'Could not delete selected event'}),
        {
            status: 500,
        })

    }
    return redirect('/events')
}