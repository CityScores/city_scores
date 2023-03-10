import React, {useState} from "react";

let name = "Parker"

export default function Navigation() {
    const [langButton, setLangButton] = useState(false)

    const greeting = (name:string) => {
        if(name){
            return <span>Welcome, {name}</span>
        }
        else {
            return <span>Welcome</span>
        }
    }
    const handleLanguage = () => {
        setLangButton(!langButton)
    }
    
    
    
    return (
        <nav >
            <ul className="nav_tabs">
                <li><a href="#"><h4>City Scores</h4></a></li>
                <li><a href="#">Places</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Recent Searches</a></li>
            </ul>
            <ul className="nav_welcome">
                <li>{greeting(name)}</li>
                <li><button className="language_button" onClick={handleLanguage}>Choose your Language</button> {langButton ? (<ul>
                    <li><button> English </button></li>
                </ul>) : null}</li>
            </ul>
        </nav>
    )
}
 