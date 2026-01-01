import React, { useMemo, useState } from 'react'

const UseMemoExample = () => {


    const [no, setNo] = useState(0)

    const handleClick = () => {
        setNo(no + 1)
    }

    const counter = useMemo(() => {
        return no * no
    }, [no])

    return (
        <div>
<h2>(1).useMemo Hook</h2>
            <h1>{no}</h1>


            <h2>{counter}</h2>

            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default UseMemoExample

