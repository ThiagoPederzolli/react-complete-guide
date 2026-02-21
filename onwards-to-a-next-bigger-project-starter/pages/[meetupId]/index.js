import { MongoClient, ObjectId } from "mongodb";
import MeetupDetails from "../../components/meetups/MeetupDetails";
import Head from "next/head";
const meetupItem = {
    title: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some Address 5, 1234 Some City, RS',
    description: 'This is a first meetup'
}
function MeetupDetailsPage(props) {
  return (
   <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta
          name="description"
          content={props.meetupData.description}
        />
      </Head>
    <MeetupDetails {...props.meetupData} />
   </>
  )
}

export async function getStaticPaths() {
  const client = await MongoClient.connect();
  const db = client.db();
  const meetupCollections = db.collection('meetups');
  const meetups = await meetupCollections.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    fallback: false,
    paths:  meetups.map((meetup) => ({
        params: {
          meetupId: meetup._id.toString(),
        }
      })),
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
   const client = await MongoClient.connect();
  const db = client.db();
  const meetupCollections = db.collection('meetups');
  // console.log('meetupCollections', meetupCollections);
  const selectedMeetup = await meetupCollections.findOne({ _id: new ObjectId(meetupId) });
  client.close();
  return {
    props: {
      meetupData: {
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        id: selectedMeetup._id.toString(),
        description: selectedMeetup.description
      },
    }
  }
}

export default MeetupDetailsPage