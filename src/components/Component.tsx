import React, {useState} from 'react'

interface Types {
    init?: number
}

const Component: React.FC <Types> = ({init = 0}) => {

    const [noOfClicks, setNoOfClicks] = useState(init);

    console.log(noOfClicks);

    return (
        <>
            <p>You clicked {noOfClicks} times</p>
                <button onClick={() => setNoOfClicks(noOfClicks + 1)}>
                Click me
            </button>
        </>
    )
}

export default Component
