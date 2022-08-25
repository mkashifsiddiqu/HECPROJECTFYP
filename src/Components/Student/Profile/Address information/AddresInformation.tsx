import React from "react"
import CurrentAddress from "./CurrentAddress"
import MailAddress from "./MailAddress"
import PermanentAddress from "./PermanentAddress"
const AddresInformation = ()=>{
    return (
        <>
            <PermanentAddress/>
            <MailAddress/>
            <CurrentAddress/>
            
        </>
    )
}
export default AddresInformation
