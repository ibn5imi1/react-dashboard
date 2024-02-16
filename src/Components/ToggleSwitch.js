import "../css/ToggleSwitch.css"
export default function ToggleSwitch(){
    return(
        <>
            <label>
                <input type="checkbox" className="toggle-checkbox"/>
                <div className="toggle-switch p-relative main-tran pointer"></div>
            </label>
        </>
    )
}