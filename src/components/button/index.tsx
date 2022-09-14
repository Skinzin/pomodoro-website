import {} from 'phosphor-react'


interface ButtonProps {
    title: string;
}

export function Button({ title }: ButtonProps) {
    return(
        <button>

            {title}
        </button>
    )
}