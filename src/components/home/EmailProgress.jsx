
import { Check } from "@mui/icons-material";
import { Collapse } from "@mui/material";
import Cancel from "./icons/Cancel";

export default function EmailProgress({done, close}) {
    return (
        <div className="clear-block email-progress">
            <p className="title">{!done ? "Sending ..." : "Sent"}</p>
            <Collapse in={done} orientation="horizontal">
                <div className="row-center">
                <Check fontSize="medium" htmlColor="green" />
                <button 
                    className="invisibutton"
                    onClick={() => close()}
                >
                    <Cancel />
                </button>
                </div>
            </Collapse>
        </div>
    )
}