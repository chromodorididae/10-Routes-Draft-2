import React from 'react'

function Index(props) {
    // can't use hooks or state 
    // can't use event listeners in the same way
    return (
        <div>
            <h1>Index View</h1>
            <p>reviews go here</p>
            <ul>
                {/* {props.menu.map((fruit, index) =>  */}
                    <li>
                        {/* <a href={`/fruits/${index}`}><strong>{fruit.name}</strong></a> */}
                    </li>
                {/* )} */}
                
            </ul>
        </div>
    )
}

export default Index