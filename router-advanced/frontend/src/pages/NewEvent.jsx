import EventForm from "../components/EventForm";

function NewEventPage() {
    // function submitHandler(event) {
    //     event.preventDefault();
    //     // two-way binding or refs..
    //     //use navigate...
    // }
    return <EventForm method='post' />
}

export default NewEventPage;

