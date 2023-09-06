import { Textarea,Button } from "@chakra-ui/react"

export const TodoAdd=({
    placeholder,
    leftIcon,
    buttonText,
    inputEl,
    handleAddTodoListItem
})=>{
    return(
      <>
      <Textarea placeholder={placeholder}  mt="8" borderColor="grey.800" ref={inputEl}/>
      <Button colorScheme="blue" leftIcon={leftIcon} mt="8" onClick={handleAddTodoListItem}>{buttonText}</Button>
      </>
    )
  }