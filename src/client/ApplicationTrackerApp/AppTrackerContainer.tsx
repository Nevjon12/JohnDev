import ApplicationContainer from "./containers/ApplicationContainer";
import InputContainer from "./containers/InputContainer";
import NavBar from "../NavBar";
import { useEffect, useState } from "react";
import Notes from "./components/Notes";



export default function AppTrackerContainer(){

    const [cards, setCards] = useState([]);
    const [currentCard, setCurrentCard] = useState('')


  

    useEffect(()=>{

      const cardsInLocalStorageString = localStorage.getItem('formData');
      const cardsInLocalStorage = cardsInLocalStorageString ? JSON.parse(cardsInLocalStorageString) : [];

      setCards(cardsInLocalStorage);

    }, [])



  return(

    <>
      <div className="main">
        <h1>Application Tracker</h1>
        <>
        <InputContainer data={cards} setCards={setCards} currentCard={currentCard} />

        <ApplicationContainer data={cards} setCards={setCards} setCurrentCard={setCurrentCard} />
        </>
        <Notes data={cards} current={currentCard} />
      </div>
    </>
  )


}