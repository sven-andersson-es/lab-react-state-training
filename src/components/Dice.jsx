import { useState } from "react";
import diceEmpty from "../assets/images/dice-empty.png";
import diceImage1 from "../assets/images/dice1.png";
import diceImage2 from "../assets/images/dice2.png";
import diceImage3 from "../assets/images/dice3.png";
import diceImage4 from "../assets/images/dice4.png";
import diceImage5 from "../assets/images/dice5.png";
import diceImage6 from "../assets/images/dice6.png";

export default function Dice() {
	const [diceState, setDiceState] = useState(diceImage3);
	//console.log(diceState);

	// console.log(randomNumber);

	const rollTheDice = () => {
		const randomNumber = Math.floor(Math.random() * 6);
		// console.log(randomNumber);
        setDiceState(diceEmpty)
        const selectedDice = [diceImage1,diceImage2,diceImage3,diceImage4,diceImage5,diceImage6].slice(randomNumber,randomNumber+1)
        // console.log(selectedDice);
        setTimeout(() => {
            setDiceState(selectedDice)
            
        }, 1000);
        /* 
        setTimeout(() => {
            switch (randomNumber) {
                case 1:
                    setDiceState(diceImage1);
                    break;
                case 2:
                    setDiceState(diceImage2);
                    break;
                case 3:
                    setDiceState(diceImage3);
                    break;
                case 4:
                    setDiceState(diceImage4);
                    break;
                case 5:
                    setDiceState(diceImage5);
                    break;
                case 6:
                    setDiceState(diceImage6);
                    break;
                default:
                    setDiceState(diceImage3);
                    break;
            }    
        }, 1000); */
        
	};

    //prevent double click
    // const clickDice = () => {
    //     setTimeout(() => {
    //         rollTheDice()
    //     }, 1200);
    // }

	return (
		<div className="diceWrapper">
			<img
				onClick={() => {
					rollTheDice();
				}}
				src={diceState}
				alt=""
			/>
		</div>
	);
}
