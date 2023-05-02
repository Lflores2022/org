import './Boton.css'

const Boton = (props, e) =>{
    return (
        <button className='boton'>{props.children}</button>
    )
}

export default Boton