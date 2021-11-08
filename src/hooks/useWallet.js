import  { useState } from 'react'

const useWallet = () => {

    const [openWallet, setOpenWallet] = useState(true)

    return { openWallet, setOpenWallet }


}

export default useWallet