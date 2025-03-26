
function Image({ className, src, innerClassName }: { className?: string, src: string, innerClassName?: string }) {
    return (
        <div className={` ${className}`} >
            <div className={` ${innerClassName}`}>

                <img src={src} alt="image" />
            </div>
        </div>
    )
}

export default Image