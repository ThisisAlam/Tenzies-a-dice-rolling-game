
import Confetti from "react-confetti"
export default function WinScreen(props){

    return(
        <section className="win-screen">

        <div className="win-card">

            <div className="trophy">🏆</div>

            <h1>You Won!</h1>

            <div className="stats">
                <p>Total Rolls: {props.rolls}</p>
                <p>Time: {props.time}s</p>
            </div>

            <button onClick={props.newGame}>
                Play New Game
            </button>

        </div>

    </section>
    )
}