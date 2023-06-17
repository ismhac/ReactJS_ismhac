
import React from 'react'
import ChildComponent from './ChildComponent'
import AddComponent from './AddComponent'

class MyComponent extends React.Component {

    // key:value
    state = {
        arrJobs: [
            { id: 'abcJob1', title: 'Developers', salary: '500' },
            { id: 'abcJob2', title: 'Testers', salary: '400' },
            { id: 'abcJob3', title: 'Projetc manager', salary: '1000' }
        ]
    }

    /* 
    JSX => return block
    <React.Fragment> </React.fragment> === <> </>
    */

    
    

    render() {
        console.log(">>> call render: ", this.state)
        return (
            <>
                <AddComponent />
                

                <ChildComponent
                    name={this.state.firstName}
                    age={'21'}
                    address={'HCM'}
                    arrJobs={this.state.arrJobs}
                />

            </>
        )
    }
}

export default MyComponent;