import image from "../assets/tenzies-icon-light.png"
export default function Header(){
  return(
    <header className="header">
        <img src={image} />
        <h1>Tenzies</h1>
        <img src={image} style={{transform:"scaleX(-1)"}}/>
    </header>
  )
}