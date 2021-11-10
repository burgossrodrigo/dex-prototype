import { useState } from 'react'

const useTheme = () => {

    const [useDark, setUseDark] = useState(light);
    return { useDark, setUseDark }

}

export default useTheme