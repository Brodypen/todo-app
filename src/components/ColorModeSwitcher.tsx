import * as React from "react"
import {
  useColorMode,
  useColorModeValue,
  Button,
  ButtonProps,
} from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"

type ColorModeSwitcherProps = Omit<ButtonProps, "aria-label">

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue("dark", "light")
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  return (
    <Button
      size="md"
      fontSize="xl"
      variant="ghost"
      color="current"
      justifyContent="flex-start"
      onClick={toggleColorMode}
      leftIcon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
      {...props}
    >{`Switch to ${text} mode`}</Button>

  )
}
