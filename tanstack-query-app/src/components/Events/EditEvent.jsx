import { Link, redirect, useNavigate, useNavigation, useParams, useSubmit } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import { fetchEvent, queryClient, updateEvent } from '../../util/http.js';

export default function EditEvent() {
  const submit = useSubmit();
  const { state } = useNavigation();
  const navigate = useNavigate();
  const { id } = useParams();
  
  const { data, error: errorFetching } = useQuery({
    queryKey: ['events', {
      id
    }],
    queryFn: ({ signal }) => fetchEvent({signal, id}),
    staleTime: 10000,
  });

  // const { mutate } = useMutation({
  //   mutationFn: updateEvent,
  //   onMutate: async (data) => {
  //     const newEvent = data.event;
  //     await queryClient.cancelQueries({queryKey: ['events', { id }]});
  //     const previousEvent = queryClient.getQueryData(['events', { id }]);
  //     queryClient.setQueryData(['events', { id }],  newEvent);
  //     return { previousEvent };
  //   },
  //   onError: (error, data, context) => {
  //     queryClient.setQueryData(['events', { id }],  context.previousEvent);
  //   },
  //   onSettled: () => {
  //     queryClient.invalidateQueries(['events', { id }])
  //   }
  // })

  function handleSubmit(formData) {
    // mutate({
    //   id,
    //   event: formData
    // })
    // navigate('../');
    submit(formData, { method: 'PUT' });

  }

  function handleClose() {
    navigate('../');
  }

  let content;
  if (errorFetching) {
    content = <>
      <ErrorBlock title="Faild to Load Event" message={errorFetching.info?.message || "please try again later"} />
      <Link to="../" className="button">
        Ok!
      </Link>
    </>
  }

  if (data) {
    content = <EventForm inputData={data} onSubmit={handleSubmit}>
        {state === 'submitting' ? <span>Submitting data...</span> : (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Update
            </button>
          </>
        )}
      </EventForm>
  }

  return (
    <Modal onClose={handleClose}>
      {content}
    </Modal>
  );
}


export function loader({ request, params}) {
  return queryClient.fetchQuery({
    queryKey: ['events', {
      id: params.id
    }],
    queryFn: ({ signal }) => fetchEvent({signal, id: params.id}),
  })
}
// different from the loader that works together with useQuery, this replaces the mutation
export async function action({ request, params}) {
  const formData = await request.formData();
  const updateData = Object.fromEntries(formData);
  await updateEvent({ id: params.id, event: updateData });
  await queryClient.invalidateQueries(['events']);
  return redirect('../');
}