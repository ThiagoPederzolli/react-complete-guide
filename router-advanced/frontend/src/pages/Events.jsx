import { Await, useLoaderData, } from 'react-router-dom';
import EventsList from '../components/EventsList';
import { Suspense } from 'react';

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // return {
        //     isError: true,
        //     message: 'Could not fetch events'
        // }
        throw new Response(JSON.stringify({message: 'Could not fetch events'}),
        {
            status: 500,
        })

        // this only is available in RRD v6
        // using v7+ you can use the data function
        // but the new Response is safier
        // return data(
        //     {message: 'Could not fetch events'},
        //     {status: 500}
        // );
    } else {
    // const resData = await response.json();
    // return resData.events;
    // const res = new Response('any data', {status: 201})
        // return response;
      // if using defer logic, we need to do manually the parsing:
      const resData = await response.json();
      return resData;
    }
}

// THIS STILL CLIENT-SIDE
export const loader = () => {
  // this defer isnt valid for RRD v7+
  // return defer({
  //   events: loadEvents(),
  // })
  return {
    events: loadEvents(),
  };
}

function EventsPage() {
    const { events } = useLoaderData();
    // const events = data.events;
    // if (data.isError) {
    //     <p>{data.isError}</p>
    // }
    return <Suspense fallback={<p style={{ textAlign: 'center'}}>Loading..</p>}>
        <Await resolve={events}>{(loadedEvents) => <EventsList events={loadedEvents.events} />}</Await>
    </Suspense>
  // return (
  //   <>

  //     <EventsList events={events} />
  //   </>
  // );
}

export default EventsPage;
