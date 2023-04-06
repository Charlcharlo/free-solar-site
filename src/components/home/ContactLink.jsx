import Email from "./icons/Email";
import Facebook from "./icons/Facebook";
import Phone from "./icons/Phone";

export default function ContactLink(props) {
 return (
     <div className="row-start link" >
        {
           props.icon === "email" ?
           <Email /> :
           props.icon === "facebook" ?
           <Facebook /> :
           props.icon === "phone" ?
           <Phone /> :
           null
        }
        <a href={props.link}>{props.text}</a>
     </div>
 )
}