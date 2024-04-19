import React from "react";

const Question = ()=>{
    return(
        <div class="p-6 pt-0">
        <a href="#" class="inline-block">
            <button
                class="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 normal align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                type="button">
                How do we use "shall" in a sentense?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                </svg>
            </button>
        </a>
        </div>
    )
}
export default Question;