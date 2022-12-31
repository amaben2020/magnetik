import { useContext } from 'react'
import { Theme } from "@/context"


const useTheme = () => {
  const values = useContext(Theme)

  return values
}

export default useTheme