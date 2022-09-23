import {useEffect, useState} from "react"
import Circular from "@mui/material/CircularProgress";


export function Clock() {
    const [progress, setProgress] = useState(0);


    useEffect(() => {
        const tempo = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 2));
        }, 10000 / 10);

        return() => {
            clearInterval(tempo)
        }
    }, [])
    return (
        <>
            {/* <Circular variant="determinate" disableShrink sx={{color: "GrayText", animationDuration: '550ms'}}/> */}
            <Circular variant="determinate" value={progress}/>
        </>
    )
}