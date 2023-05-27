
export const Prop = (props) => {
    return (
        <>
    <h1>hello!! {props.name} a.k.a {props.setHeroName}</h1>
    {props.children}
    </>
    )
}




export default Prop;