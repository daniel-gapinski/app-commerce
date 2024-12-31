export interface PaginaProps {
    children: React.ReactNode
    className?: string
}

export default function Pagina(props: PaginaProps) {
    return (
        <div className="w-full h-screen py-20">
            <div className="container mx-auto ">
                {props.children}
            </div>
        </div>
    )
}