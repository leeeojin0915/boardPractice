import map from '../map.jpg'
 import '../css/Header.css'

function Header() {
    return(
        <header className="header">
            <div className="column">
                <img src={map} style={{width:"100%",height:"200px"}}/>
            </div>
        </header>
    )
}

export default Header;