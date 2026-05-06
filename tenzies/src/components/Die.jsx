export default function Die(props){
  return(
    <>
        <button onClick={props.onClick}
                style={{backgroundColor:props.isHeld?"lightgreen":"white"}}
            >{props.value}</button>
    </>
  )
}