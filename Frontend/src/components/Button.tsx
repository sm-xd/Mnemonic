import type { ReactElement } from "react";

interface ButtonProps {
    variant: 'primary' | 'secondary' ;
    text: string;
    startIcon?: ReactElement;
}

const variantClasses = {
    "primary": "bg-purple-700 text-white hover:bg-purple-900",
    "secondary": "bg-purple-300 text-purple-900 hover:bg-purple-400",
}
const defaultClasses = "rounded-md focus:outline-none focus:ring-2  px-4 py-2 font-semibold";

export function Button({variant, text, startIcon}: ButtonProps){
    return <button className={variantClasses[variant] + " " +defaultClasses}>
        <div className="flex items-center gap-2">

        {startIcon}
        {text}
        </div>
    </button>
}