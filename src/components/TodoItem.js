import{ListItem,Text,Flex,Button,IconButton}from"@chakra-ui/react";
import {DeleteIcon} from "@chakra-ui/icons";

export const TodoItem=({todo,toggleTodoListItemStatus,deleteTodoListItem})=>{
    const handleToggleTodoListItemStatus=()=>toggleTodoListItemStatus(todo.id,todo.done);
    const handleDeleteTodoListItem=()=>deleteTodoListItem(todo.id);
    const label=todo.done?"未完了リストへ":"完了リストへ";
    const setColorScheme=todo.done?"pink":"blue";
    return(
        <ListItem borderWidth="10px" p="4" bg="white" borderRadius="19px" borderColor="gray.300" mb="6">
            <Text mb="6">{todo.content}</Text>
            <Flex align="center" justify="flex-end">
                <Button colorScheme={setColorScheme} variant="outline" size="sm" onClick={handleToggleTodoListItemStatus}>{label}</Button>
                <IconButton icon={<DeleteIcon/>} variant="outline" colorScheme={"white"} aria-label="delete" onClick={handleDeleteTodoListItem}>
                    削除
                </IconButton>
                </Flex>
        </ListItem>
    )
  }