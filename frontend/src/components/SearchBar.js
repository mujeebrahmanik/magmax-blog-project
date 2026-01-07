'use client';
import { useRouter,useSearchParams } from "next/navigation";
import {startTransition, useState,useTransition} from 'react'
import { FiSearch } from "react-icons/fi";


export default function SearchBar({defaultValue = ''}){
    const router = useRouter()
    const searchParams = useSearchParams()
    const [search,setSearch] = useState(defaultValue)
    const [isPending,setIspeding] = useTransition();
    const handleSubmit = (e) =>{
        e.preventDefault();

        const params = new URLSearchParams(searchParams);

        if(search.trim()){
            params.set('search',search.trim());
            params.set('page',1)
        }else{
            params.delete('search');
            params.set('page',1)

        }

        startTransition(()=>{
            router.push(`/?${params.toString()}`)
        });
    }
  return (
    <div className="flex justify-center lg:justify-end mb-8">
          
            <form action="" onSubmit={handleSubmit} className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="search" className="sr-only">
                Search here
              </label>
              <input id="search" onChange={(e)=>setSearch(e.target.value)} value={search} name="search" type="text"  placeholder="Search here" className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
              <button type="submit" disabled={isPending} className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                <FiSearch size={20} />
              </button>
            </form>
              
            
      </div>
  )
}

