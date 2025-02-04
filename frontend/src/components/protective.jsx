import axios from 'axios'
import React, { useEffect } from 'react'

const Protective = () => {
    useEffect(() => {
        const fetch = async () => {
         const response = await axios.get('http://localhost:3000/isadminloggedin');
         console.log(response)
        }
        fetch()
    }, [])



    return (
        <div>Protective</div>
    )
}

export default Protective