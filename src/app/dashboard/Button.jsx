import { useRouter } from "next/navigation";

export default function Button(prop){

    const router = useRouter();

    const changePage = () => {
    router.push('/dashboard');

  };
    return(
        
         <button onClick={changePage} className="w-32 h-12 cursor-pointer bg-green rounded-md m-6 p-2 shadow-md shadow-seagreen hover:ring-1 hover:font-medium ring-emerald-700 transition delay-150 duration-100 ease-in-out">{prop.label}</button>
    );
}