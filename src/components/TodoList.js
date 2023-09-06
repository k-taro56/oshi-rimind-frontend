import { TodoItem } from "./TodoItem"
import { TodoTitle } from "./TodoTitle"
import {List}from"@chakra-ui/react"

export const TodoList=({todoList,toggleTodoListItemStatus,deleteTodoListItem,title,as,fontsize})=>{
    return(
        <>
        {todoList.length!==0 &&(
            <>
            <TodoTitle title={title} as={as} fontsize={fontsize} mt="12"/>
      <List w="full">
        {todoList.map((todo)=>(
          <TodoItem todo={todo} key={todo.id} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem={deleteTodoListItem}/>
        ))}
      </List>
      </>
        )
}
      </>
    )
  }