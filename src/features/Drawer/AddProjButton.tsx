import { Button, HStack, Input } from "@chakra-ui/react";
import React from "react";
interface AddButtonProps {
  text: string;
  handleAddButton: Function;
  icon: JSX.Element;
}
export const AddButton = ({
  handleAddButton,
  text,
  icon,
  ...props
}: AddButtonProps) => {
    const [Proj, setProj] = React.useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddButton(Proj);
      }}
    >
      <HStack>
        <Input
          type="text"
          name="Proj"   
          value={Proj}
          onChange={(e) => setProj(e.target.value)}
       focusBorderColor="white"
          variant="filled"
          placeholder="Name of project..."
        />
        <Button
        type="submit"
          variant="ghost"
          color="current"
          justifyContent="flex-start"
          leftIcon={icon}
        ></Button>
      </HStack>
    </form>
  );
};
