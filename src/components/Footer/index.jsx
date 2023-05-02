import './Footer.css'

const Footer = () =>{
    return(
        <footer className='footer' style={{backgroundImage: "url(/img/Footer.png"}}>
        <div className='redes'>
            <a href='https://www.facebook.com/masokizzta'>
                <img src='./img/facebook.png' alt='Facebook'/>
            </a>
            <a href='https://www.instagram.com/lflores403/'>
                <img src='./img/instagram.png' alt='Instagram'/>
            </a>
            <a href='https://twitter.com/luissatanlol1'>
                <img src='./img/twitter.png' alt='twitter'/>
            </a>
        </div>
        <img src='./img/Logo.png' alt='Logo'/>
        <strong>Desarrollado por Luis Flores</strong>
        </footer>
    )
}

export default Footer