import Clicker from "./Clicker";
import People from "./People";
import { useMemo, useState } from "react";

export default function App({children, clickersCount})
{
    const [hasClicker, setHasClicker] = useState(true)
    const [ count, setCount ] = useState(0)

    const colors = useMemo(() =>
    {
        const colors = []
        for (let i = 0; i < clickersCount; i++)
        {
            colors.push(`hsl(${ Math.random() * 360 }deg, 100%, 70%)`)
        }
        return colors
    }, [clickersCount])

    const toggleClickerClick = () =>
    {
        setHasClicker(!hasClicker)   
    }

    const increment = () =>
    {
        setCount(count + 1)   
    }

    return <>
        {children}
        <button onClick={toggleClickerClick}>{hasClicker ? 'Hide' : 'Show'} Clicker</button>

        <div>Total count: {count}</div>

        { hasClicker && <>
            { [...Array(clickersCount)].map((value, index) =>
                <Clicker
                    key={index}
                    increment={increment}
                    keyName={`count${index}`}
                    color={colors[index]}
                />
            ) }
            <People></People>
        </> }
    </>
}