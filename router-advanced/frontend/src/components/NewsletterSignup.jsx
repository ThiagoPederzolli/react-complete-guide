import { useFetcher } from 'react-router-dom';
import classes from './NewsletterSignup.module.css';
import { useEffect } from 'react';

function NewsletterSignup() {
  // the fetcher.Form will trigger an actions
  // but will not initialize a route transition.
  // so fetcher basically should be used whenever you wanna trigger an action
  // or also a loder, without navigate to the page to which the loader/actions belongs
  const fetcher = useFetcher();
  const { data, state } = fetcher;
  useEffect(() => {
    if (state === 'idle' && data && data.message) {
      window.alert(data.message)
    }
  }, [data, state])
  return (
    <fetcher.Form method="post" action="/newsletter" className={classes.newsletter}>
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;