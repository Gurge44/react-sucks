import {useState} from 'react'

const Toggle = () => {
    const [enabled, setEnabled] = useState(false);
    return (
        <div className={enabled ? "toggle on": "toggle off"} onClick={()=>setEnabled(!enabled)}>
            <div ></div>
        </div>
    )
}
export default Toggle
