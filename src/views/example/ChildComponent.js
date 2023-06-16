
import React from 'react'

class ChildComponent extends React.Component {

    // key:value
    state = {
        firstName: "",
        lastName: ""
    }

    /* 
    JSX => return block
    <React.Fragment> </React.fragment> === <> </>
    */

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log('>>> check data input', this.state)
    }

    render() {
        // let name = this.props.name;
        // let age = this.props.age;
        // console.log(">>> check props: ", this.props)

        let { name, age } = this.props;

        return (
            <>
                <div>
                    child component name : {name} - {age}
                </div>
            </>
        )
    }
}

export default ChildComponent;