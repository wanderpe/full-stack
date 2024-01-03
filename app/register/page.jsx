'use client'

import axios from "axios";

export default async function RegisterPage() {

    async function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries())
        console.log(data)

        await axios.post('/api/auth/register', data)
        
       

    }
    return (
        <form onSubmit={handleSubmit} style={{ border: '1px solid black' ,padding: '15px', margin: '10px 0px' }}>
            <input style={{ border: '1px solid black' ,padding: '15px', margin: '10px 0px' }} type="email" name="email"></input>
            <input style={{ border: '1px solid black',padding: '15px', margin: '10px 0px' }} type="password" name="password"></input>
            <button type="submit">Register</button>
        </form>
    )
}