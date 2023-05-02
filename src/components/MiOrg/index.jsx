import './MiOrg.css'

const MiOrg = (props) =>{
    return(
        <section className="orgSection">
            <h3 className='title'>Mi organización</h3>
            <img onClick={props.cambiarMostrar} src='/img/add.png' alt='add' className='add__org'/>
        </section>
    )
}

export default MiOrg
