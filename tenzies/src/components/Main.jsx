import Die from "./Die.jsx" 

export default function Main(){
  return(
    <main className="main">
      <div className="instructions">
        <strong>Roll until all dice are the same.</strong>
        <small>Click dice to hold them.</small>
      </div>
      <section className="die-container">
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
      </section>
      <button className="game-btn">Roll Dice</button>
    </main>
  )
}