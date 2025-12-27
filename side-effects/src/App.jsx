import { useEffect, useRef, useState, useCallback } from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import { sortPlacesByDistance } from './loc.js';

// we just need this running one time and this ends before the component 
// is completely mounted, so we can leave outside the component to ensure that will run just one time
// and instead of update the state, define storedPlaces as initial value for pickedPlaces
const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
const storedPlaces = storedIds.map((id) => AVAILABLE_PLACES.find((place) => place.id === id));

function App() {
  const selectedPlace = useRef();
  const [availablePlaces, setAvailablePlaces] = useState(AVAILABLE_PLACES);
  console.log("storedIds", storedIds)
  console.log("storedPlace", storedPlaces)
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // this is a redundant case of useEffect because
  // localStorage is a synchornous logic
  // useEffect(() => {
  //    const storedIds = JSON.parse(localStorage.setItem('selectedPlaces')) || [];
  // const storedPlaces = storedIds.map((id) => {
  //   return AVAILABLE_PLACES.find((place) => place.id === id);
  // })
  // setPickedPlaces(storedPlaces)
  
  // }, []);

  // this case make sense using useEffect because isnt synchronous
  // this logic just ends when the callback for getCurrentPosition
  useEffect(() => {
    // this is a Side Effect
  // because although this code is needed by the component
  // isnt related to the main goal of the component
  // the main goal of each component is return renderable js code 
  navigator.geolocation.getCurrentPosition((position) => {
    const sortedPlaces = sortPlacesByDistance(AVAILABLE_PLACES, position.coords.latitude, position.coords.longitude);
    setAvailablePlaces(sortedPlaces);
  }); 
  }, [])


  function handleStartRemovePlace(id) {
    setIsModalOpen(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setIsModalOpen(false);
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = availablePlaces.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    // this is another side effect because isnt directly related to
    // rendering the js code
    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
    if (storedIds.indexOf(id) === -1) {
      localStorage.setItem('selectedPlaces', JSON.stringify([id, ...storedIds]));
    }
  }

  const handleRemovePlace = useCallback(function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    setIsModalOpen(false);


    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
    localStorage.setItem('selectedPlaces', JSON.stringify(storedIds.filter((storeId) => storeId !== selectedPlace.current)));

  }, [])

  return (
    <>
      <Modal open={isModalOpen}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
