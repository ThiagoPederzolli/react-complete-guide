/** biome-ignore-all lint/correctness/useUniqueElementIds: <explanation> */
import Accordion from "./components/Accordion/Accordion";
import SearchableList from "./components/SearchableList/SearchableList";
import Place from "./Place";

import savannaImg from './assets/african-savanna.jpg';
import amazonImg from './assets/amazon-river.jpg';
import caribbeanImg from './assets/caribbean-beach.jpg';
import desertImg from './assets/desert-dunes.jpg';
import forestImg from './assets/forest-waterfall.jpg';

const PLACES = [
  {
    id: 'african-savanna',
    image: savannaImg,
    title: 'African Savanna',
    description: 'Experience the beauty of nature.',
  },
  {
    id: 'amazon-river',
    image: amazonImg,
    title: 'Amazon River',
    description: 'Get to know the largest river in the world.',
  },
  {
    id: 'caribbean-beach',
    image: caribbeanImg,
    title: 'Caribbean Beach',
    description: 'Enjoy the sun and the beach.',
  },
  {
    id: 'desert-dunes',
    image: desertImg,
    title: 'Desert Dunes',
    description: 'Discover the desert life.',
  },
  {
    id: 'forest-waterfall',
    image: forestImg,
    title: 'Forest Waterfall',
    description: 'Listen to the sound of the water.',
  },
];

function App() {
  return <main>
    <section>
      <h2>Why work with us?</h2>
      <Accordion className="accordion">
        <Accordion.Item
          id="experience"
          className="accordion-item"
        >
          <Accordion.Title className="accordion-item-title">
            20 years of experience
          </Accordion.Title>
          <Accordion.Content className="accordion-item-content">
           <article>
              <p>you cant go wrong with us</p>
              <p>We are doing that for more than 20 years</p>
            </article> 
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item
          id="local-guides"
          className="accordion-item"
        >
          <Accordion.Title className="accordion-item-title">
            Working with local guides
          </Accordion.Title>
          <Accordion.Content className="accordion-item-content">
            <article>
              <p>We have lots of partnerships</p>
              <p>We dont leave you alone for one second, always have someone to help´.</p>
            </article>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </section>
    <section>
      <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
        {(item) => <Place item={item} />}
      </SearchableList>
      <SearchableList items={['item 1', 'item 2', 'item 3', 'item 4',]} itemKeyFn={(item) => item}>
        {(item) => item}
      </SearchableList>
    </section>
  </main>
}

export default App;
