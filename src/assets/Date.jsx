import React from "react";

export default function Dateis(){
        
    let showdate=new Date();
    const dateis=showdate.getDate()+'/'+showdate.getMonth()+'/'+showdate.getFullYear()

    return( <h1>{dateis}</h1>)
}