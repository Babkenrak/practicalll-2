


interface Props {
    className?: string;
}

export const TopBar: React.FC<Props> =({ className}) => {
    function cn(arg0: string, className: string | undefined): string | undefined {
        throw new Error("Function not implemented.");
    }

    return (
        <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10',className)}>

        </div>
    )
}