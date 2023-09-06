import { useState } from "react";
export default function Scoreboard() {

  const [player, setPlayer] = useState({
    firstName: "Ranjani",
    lastName: "Shettar",
    score: 10,
  });

  // function handlePlusClick() {
  // player.score++;
  // }

  /** This handleClick function has changes the score directly which is immutable
  *  so that we have to use the setPlayer method and target on the score attribute
  */

  function handlePlusClick(event) {
    // setPlayer({...player, score: event.score++}) // this line of code resets the values from zero
    setPlayer((player) => ({
      ...player,
      score: player.score++,
    }));
  }

  //The second function seems to be well
  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  // This function does not save the previous values of the object, we need to spread
  // the attributes to keep the values saved

  // function handleLastNameChange(e) {
  //   setPlayer({
  //     lastName: e.target.value,
  //   });
  // }

  function handleLastNameChange(e) {
    setPlayer({
      ...player,
      lastName: e.target.value,
    });
  }


  return (
    <>
      <label>
        Score: <b>{player.score}</b>{" "}
        <button onClick={handlePlusClick}>+1</button>
      </label>
      <hr></hr>
      <label>
        First name:
        <input value={player.firstName} onChange={handleFirstNameChange} />
      </label>
      <hr></hr>
      <label>
        Last name:
        <input value={player.lastName} onChange={handleLastNameChange} />
      </label>
    </>
  );
}
