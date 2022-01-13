import React from 'react';
// Add import statements below
import { useSelector, useDispatch } from 'react-redux'
import { selectVisibleIDs, selectMatchedIDs, flipCard, resetCards } from '../../boardSlice'


let cardLogo = "https://static-assets.codecademy.com/Courses/Learn-Redux/matching-game/codecademy_logo.png";

export const Card = ({ id, contents }) => {
  // Add selected data and dispatch variables below
  const dispatch = useDispatch()
  const visisbleIDs = useSelector(selectVisibleIDs)
  const matchedIDs = useSelector(selectMatchedIDs)
  
  // flip card action
  const flipHandler = (id) => {
    // Add action dispatch below
    dispatch(flipCard(id))
  };

  const tryAgainHandler = () => {
    // Add action dispatch below
    dispatch(resetCards())
  };

  let cardStyle = 'resting'
  let click = () => flipHandler(id);
  
  let cardText = (
    <img src={cardLogo} className="logo-placeholder" alt="Card option" />
  );

  // 1st if statement
  // implement card id array membership check
  if (visisbleIDs.includes(id) || matchedIDs.includes(id)) {
    cardText = contents;
    click = () => {};
  }

  // 2nd if statement
  // implement card id array membership check
  if (matchedIDs.includes(id)) {
    cardStyle = 'matched';
  }

  if (visisbleIDs.length === 2 && !(matchedIDs.includes(id))) {
    cardStyle = 'no-match';
  }

  // 3rd if statement
  // implement number of flipped cards check
  if (visisbleIDs.length === 2) {
    click = tryAgainHandler;
  }

  return (
    <button onClick={click} className={`card ${cardStyle}`}>
      {cardText}
    </button>
  );
};
