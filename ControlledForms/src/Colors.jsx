export function Colors({colors}){

    return (

        <ul>
        {colors.map((item)=> (<li key = {item.id}>{item.name}</li>))}
        </ul>
    )

}