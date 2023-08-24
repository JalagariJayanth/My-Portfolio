import "./index.css"
import {FaRegCopyright} from "react-icons/fa"
import {IoIosMail} from "react-icons/io"
import {AiFillGithub,AiFillLinkedin} from "react-icons/ai"

const Footer = () => {
    return (
        <div className="footer_section">
            <div className="icon-copyrights">
            <FaRegCopyright className="icon" />
            <p>2023 / Designed and Developed by Jalagari Jayanth </p>
            </div>
            <div className="icons">
                <a href="mailto:jayanthjalagari@gmail.com">
                     <IoIosMail className="icons-size" />
                     </a>
                <a  href="https://www.linkedin.com/in/jalagarijayanth/" rel="noopener noreferrer" target="_blank">
                    <AiFillLinkedin className="icons-size" />
                </a>
                <a href="https://github.com/JalagariJayanth?tab=repositories" rel="noopener noreferrer" target="_blank">
             <AiFillGithub className="icons-size" />
                </a>
            </div>
            

        </div>
    )

}
export default Footer