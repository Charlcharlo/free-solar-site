import { Cancel } from "@mui/icons-material";
import { Collapse } from "@mui/material";

export default function EmailProgress({done, close}) {
    return (
        <div className="clear-block email-progress">
            <p className="title">{!done ? "Sending ..." : "Sent"}</p>
            <Collapse in={done}>
                <button 
                    className="invisibutton"
                    onClick={() => close()}
                >
                    <Cancel />
                </button>
            </Collapse>
        </div>
    )
}