import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{ backgroundImage: "url(/img/Footer.png)" }}>
        <div className="redes">
            <a href='https://github.com/xisraeluni' target="_blank" >
                <img src="/img/github.png" alt="github" />
            </a>
            <a href='https://www.linkedin.com/in/israel-basurto-dev?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B90o%2ByuQGRvGIv7ni5VNN0w%3D%3D' target="_blank" >
                <img src="/img/linkedin.png" alt="likedin" />
            </a>
            <a href='https://www.instagram.com/xisrael__uni/' target="_blank" >
                <img src="/img/instagram.png" alt="instagram" />
            </a>
        </div>
        <img src='/img/logo.png' alt='org' />
        <strong>DESARROLLADO POR XTECH</strong>
    </footer>

}

export default Footer