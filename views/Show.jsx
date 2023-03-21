
import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Show View</h1>
            <p>menu items go here</p>
            {/* <p>The <strong>{props.fruit.name}</strong> {props.fruit.readyToEat ? 'is ready to eat' : 'is NOT ready to eat'}</p>
            <p>Its color is <span style={{ color: props.fruit.color }}>{props.fruit.color}</span></p>
            <a href="/fruits">Back</a> */}
                <a href="./breakfast">
                Breakfast</a>
                <br />
                <a href="./lunch">
                Lunch</a>
                <br />
                <a href="./dinner">
                Dinner</a>
                <br />
                <a href="./desserts">
                Desserts</a>
                <br />
                <a href="./drinks">
                Drinks</a>
        </div>
    )
}

export default Show;