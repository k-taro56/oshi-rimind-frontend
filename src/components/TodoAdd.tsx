import { Textarea, Button } from "@chakra-ui/react";
import React, { RefObject } from "react";

export const TodoAdd = ({
  placeholder,
  leftIcon,
  buttonText,
  inputEl,
  handleAddTodoListItem,
}: {
  placeholder: string;
  leftIcon: JSX.Element;
  buttonText: string;
  inputEl: RefObject<HTMLTextAreaElement>;
  handleAddTodoListItem: () => void;
}) => {
  return (
    <>
      <Textarea
        placeholder={placeholder}
        mt="8"
        borderColor="grey.800"
        ref={inputEl}
      />
      <Button
        colorScheme="blue"
        leftIcon={leftIcon}
        mt="8"
        onClick={handleAddTodoListItem}
      >
        {buttonText}
      </Button>
    </>
  );
};
