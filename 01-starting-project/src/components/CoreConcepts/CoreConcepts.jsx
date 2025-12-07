import { CORE_CONCEPTS } from '../../assets/data';
import Section from '../Section/Section';
import CoreConcept from './CoreConcept';
import './CoreConcepts.css';
function CoreConcepts() {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map(({ image, title, description }) => (
          <CoreConcept
            key={title}
            img={image}
            title={title}
            description={description}
          />
        ))}
      </ul>
    </Section>
  )
}

export default CoreConcepts;