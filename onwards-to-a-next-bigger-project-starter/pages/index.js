import Head from 'next/head';
import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some Address 5, 1234 Some City, RS',
    description: 'This is a first meetup'
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some Address 15, 1234 Some City, RS',
    description: 'This is a second meetup'
  },
  {
    id: 'm3',
    title: 'A Third Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some Address 35, 1234 Some City, RS',
    description: 'This is a third meetup'
  },
]

function HomePage({ meetups }) {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups"
        />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  )
}

// run during the build process
// Now if you dont have any data that changes all the time
// and with that, really mean that it changes multiple times every second
// and if you dont need access to the request object, lets say for authentication
// getStaticProps is actually better
// because here you pre-generate an HTML file
// that file can then be stored and served by a CDN
// And that simply is faster than pre-generating  and fetching that data for every incoming request
export async function getStaticProps() {
  const client = await MongoClient.connect();
  const db = client.db();
  const meetupCollections = db.collection('meetups');
  const meetups = await meetupCollections.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),

      })),
    },
    revalidate: 10
  }
}

// run always on the server after deployment
// this might sounds better because it's guaranteed to run for every request
// but that actually can be a disadvantage
// because that means that you need to wait for your page
// to be generated on every incoming request
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export default HomePage;