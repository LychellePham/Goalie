'use client'
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";


export default function SignInPage(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter();

    const handleSignIn = async (e) => {
        e.preventDefault();
        setError("");

        const {data, error} = await supabase.auth.signUp({email, password});

        if (error) {
            setError(error.message);
        }else{
            router.push("/dashboard");
        }
    };


    return(
        <form onSubmit={handleSignIn}>
            <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)}></input>
            <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
            <button>Sign up</button>
        </form>
    )
}