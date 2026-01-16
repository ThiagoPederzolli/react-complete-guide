import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';

import Header from '../Header.jsx';
import { deleteEvent, fetchEvent, queryClient } from '../../util/http.js';
import { useMutation, useQuery } from '@tanstack/react-query';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import Modal from '../UI/Modal.jsx';
import { useState } from 'react';

export default function EventDetails() {
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, error: errorFetching, isPending: isFetchPending} = useQuery({
    queryKey: ['events', {
      id
    }],
    queryFn: ({ signal }) => fetchEvent({signal, id}),
  });

   const { mutate, isPending: isDeletePending, error: errorDeleting} = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['events'],
        refetchType: 'none'
      })
      navigate('/events');
    }
  })

  const handleStartDelete = () => {
    setIsDeleting(true)
  }

  const handleStopDelete = () => {
    setIsDeleting(true)
  }

  const handleDelete = () => {
    mutate({id});
  }

  let content;
  if (isFetchPending) {
    content = <LoadingIndicator />;
  }

  if (errorFetching) {
    content = <ErrorBlock title="An error occurred" message={errorFetching.info?.message || "Failed to fetch events"} />
  }

  if (data) {
    content = <article id="event-details">
        <header>
          <h1>{data.title}</h1>
          {!isDeletePending && (
            <nav>
            <button
              onClick={handleStartDelete}
              disabled={isDeletePending}
            >Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
          )}
          
          
        </header>
        <div id="event-details-content">
          <img src={`http://localhost:3000/${data.image}`} alt={data.description} />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{data.location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>{data.date} @ {data.time}</time>
            </div>
            <p id="event-details-description">{data.description}</p>
          </div>
        </div>
      </article>
  }

  

  return (
    <>
      {isDeleting && (
        <Modal onClose={handleStopDelete}>
        <h2>Are you sure?</h2>
        <p>Do you really want to delete this event? This action cannot be undone</p>
        {errorDeleting && <ErrorBlock title="An error occurred" message={errorDeleting.info?.message || "Failed to delete event"} />}
        <div className="form-actions">
          {isDeletePending ? (<p>Deleting, please wait...</p>) 
            : (
              <>
                <button onClick={handleStopDelete}>
                  Cancel
                </button>
                <button onClick={handleDelete}>
                  Cancel
                </button>
              </>
            )}
        </div>
      </Modal>
      )}
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {content}
    </>
  );
}
