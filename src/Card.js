import imgOne from "./img.jpg"
function Card({users,deletFunc}) {
    console.log(users);
    return (

        <>
            {users.map((el,idx) => 
            
            <div key={idx} className='card' >
                <div className="close" onClick={(e)=>deletFunc(e, idx)}><img className="imgUeser" src={imgOne} alt=""/></div>
                <p>Name :-{el.name} </p>
                <p>Age :- {el.Age} </p>
                <p>phone:- {el.phone}</p>
            </div>

            )

            }

        </>
    )
}
export default Card;