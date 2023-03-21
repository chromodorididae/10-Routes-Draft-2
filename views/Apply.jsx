

import React from 'react'

function Apply(props) {
    // can't use hooks or state 
    // can't use event listeners in the same way
    return (
        <div>
            <h1>Job Application</h1>
            <form>
                <label><strong>submit your information below:</strong></label>
                <br />
                <br />
                <input type="text" value="NAME"/>
                <br /><br />
                <input type="text" value="NUMBER" />
                <br /><br />
                <input type="text" value="EMAIL" />		
            </form>
            <div>
                <br />
                <form>
                    <strong>position desired</strong>
                    <br />
                <input type="radio" value="Cook" name="Cook" /> Cook
                <input type="radio" value="Marketer" name="Marketer" /> Marketer
                <input type="radio" value="Driver" name="Driver" /> Driver
                </form>

            </div>
        </div>
    )
}

export default Apply

//100% janky form - how do I create this without using useState or hooks? revise later