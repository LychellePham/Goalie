'use client'
import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { useRouter } from "next/navigation"

export default function LoginPage(){
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()
        const {error} = await supabase.auth.signInWithPassword({email, password})
        if (error) {
            setError(error.message)

        }else {
            router.push('./dashboard')
        }
    }

    return(
        <form onSubmit={handleLogin} className="p-4">
            <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)}></input>
            <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
            <button type="submit">Login</button>
            {error && <p className="text-red-500">{error}</p>}
        </form>
    )
}