import { useState } from "react"
import RegisterForm from "../RegisterForm/RegisterForm"

const Splash = props => {
    const [showRegister, setShowRegister] = useState(false)
    return (
        <>
            <h2>Splash</h2>
            {showRegister &&(
                <RegisterForm closeModal={() => setShowRegister(false)}/>
            )}
        </>
    )
}
export default Splash