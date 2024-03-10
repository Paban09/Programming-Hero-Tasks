export default function User({user}){
    return(
        <div style={{'border':'4px solid red','padding':'20px','margin-bottom':'10px'}}>
            <h4>Name = {user.name} </h4>
            <p>Email  = {user.email}</p>
        </div>
    )
}
