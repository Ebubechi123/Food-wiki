

const Title =({
    children,
    style,
    className
})=>{
    return(
        <>
        <h1 style={style} className={className}>{children}</h1>
        </>
    )
}


export default Title