 export function User(props){
    console.log(props)
    return (
        <div>
            <h1>{props.member.name}</h1>
          
            <p>{props.member.age}</p>
        </div>
    )
 }

