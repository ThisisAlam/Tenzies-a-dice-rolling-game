import Die from "./Die.jsx" 
import WinScreen from "./WinScreen.jsx"
import "./winscreen.css"
import React from "react"

import Confetti from "react-confetti"

export default function Main(){
    
    function generateNewDice(){
        const diceObjArray = []
        for (let i=0;i<10;i++){
            const randomObj = {
                value: (Math.floor(Math.random()*6)+1),
                isHeld: false,
                id: crypto.randomUUID()
            }
            diceObjArray.push(randomObj)
        }
        return diceObjArray
    }
    const [dice, setDice] = React.useState(generateNewDice)
    const [rollCount, setRollCount] = React.useState(0)
    const [time, setTime] = React.useState(0)
    
    function newGame(){
        setDice(generateNewDice())
        setRollCount(0)
        setTime(0)
    }

    function rollDice(){
        setRollCount(prev => prev + 1)
        setDice(prev=>prev.map(die=>(
            !die.isHeld
            ? {...die, value:(Math.floor(Math.random()*6)+1)}
            : die
        )))
    }

    function holdId(id){
        setDice(prev=>prev.map(die=>(
            die.id===id
            ? {...die, isHeld:!die.isHeld}
            : die
        )))
    }
    
    function flipBoolean(){
        setDice(prev=>prev.map(die=>({
            ...die,
            isHeld:!die.isHeld
        })))
    }
    
    const gameWon = 
    dice.every(die => die.isHeld) &&
    dice.every(die => die.value === dice[0].value)
    
    React.useEffect(() => {

        if(gameWon) return

        const timer = setInterval(() => {
            setTime(prev => prev + 1)
        }, 1000)

        return () => clearInterval(timer)

    }, [gameWon])
    
    function displayDieArray(){
        const dieArray = dice.map(die=>(
            <Die 
            key={die.id} /* This key does not need passing into the 
            button becuse React uses the key 
            internally automatically */

            value={die.value}
            isHeld={die.isHeld}
            onClick={()=>holdId(die.id)}
            />
        ))
        return dieArray
    }
    
    console.log(dice)
    
    return(
    <>
        {gameWon && <Confetti />}
        
        <main className="main">
            <div className="instructions">
                <strong>Roll until all dice are the same.</strong>
                <small>Click dice to hold them.</small>
            </div>
            <div className="game-stats">
                <div className="stat-box">
                    <span>Rolls</span>
                    <strong>{rollCount}</strong>
                </div>

                <div className="stat-box">
                    <span>Time</span>
                    <strong>{time}s</strong>
                </div>
            </div>
            <section className="die-container">
                {displayDieArray()}
            </section>
            <button onClick={rollDice} className="game-btn">{gameWon ? "New Game" : "Roll Dice"}</button>
        </main>
        
        {gameWon &&
            <WinScreen
                rolls={rollCount}
                time={time}
                newGame={newGame}
            />
        }

    </>
    )

}