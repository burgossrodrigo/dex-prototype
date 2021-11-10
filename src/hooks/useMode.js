import { useState } from 'react'

const useMode = () => {

    const [ mode, setMode ] = useState('light')

    return { mode, setMode }

}

export default useMode