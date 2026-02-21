import { useState } from 'react';
import TabButton from '../TabButton/TabButton';
import Tabs from '../Tabs/Tabs';
import { EXAMPLES } from '../../assets/data';
import './Examples.css';
import Section from '../Section/Section';
function Examples() {
  const [tabContent, setTabContent] = useState(undefined);
  function handleSelectConcept(concept) {
    setTabContent(concept);
  }
  const EXAMPLES_ARRAY = Object.keys(EXAMPLES);

    return (
        <Section title="Examples" id="examples">
         <Tabs buttons={EXAMPLES_ARRAY.map((title) => (
              <TabButton
                key={title}
                onClick={() => handleSelectConcept(title)}
                isActive={tabContent === title}
              >
                {title}
              </TabButton>
            ))}
            buttonsContainer="menu"
          >
          {!tabContent ? (
            <p>Please select a concept to see an example.</p>
            ) : (
              <div id="tab-content">
            <h3>{EXAMPLES[tabContent.toLowerCase()].title}</h3>
            <p>{EXAMPLES[tabContent.toLowerCase()].description}</p>
            <pre>
              <code>
                {EXAMPLES[tabContent.toLowerCase()].code}
              </code>
            </pre>
          </div>
            )}
         </Tabs>
        </Section>
    )
}

export default Examples;