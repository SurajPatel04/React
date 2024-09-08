import React from "react";
import { useState } from "react";

function Footer() {

    const [color, setColor] = useState("blackx")

    return (
        <div className="flex flex-col justify-between w-full h-screen duration-200" 
             style={{ backgroundColor: color, padding: "20px" }}>        
            {/* Main Content */}
            <div className="flex-grow"></div>
    
            {/* Bottom Bar */}
            <div className="bg-white rounded-3xl flex flex-wrap gap-3 flex-row justify-evenly w-full p-3">
                <button className="p-3 rounded-3xl w-36" style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>Red</button>
                <button className="p-3 rounded-3xl w-36" style={{ backgroundColor: "yellow" }} onClick={() => setColor("yellow")}>Yellow</button>
                <button className="p-3 rounded-3xl w-36" style={{ backgroundColor: "pink" }} onClick={() => setColor("pink")}>Pink</button>
                <button className="p-3 rounded-3xl w-36" style={{ backgroundColor: "brown" }} onClick={() => setColor("brown")}>Brown</button>
                <button className="p-3 rounded-3xl w-36" style={{ backgroundColor: "olive" }} onClick={() => setColor("olive")}>Olive</button>
            </div>
        </div>
    );
    
    
}

export default Footer;
