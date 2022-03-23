import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { Title } from '../Title';
import { Modal } from '../Modal/'
import { TodoForm } from "../TodoForm";

function AppUi(){
    const {
          loading,
          error,
          searchTodos,
          completeTodo,
          deleteTodo,
          openModal,
          setOpenModal,
        } = React.useContext(TodoContext)
    return(
    <React.Fragment>
      <Title/>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {error && <p>Error</p>}
        {loading && 
          <div className="skeletonLoading">
            <p className="text">Cargando...</p>
          </div>
        }
        {(!loading && !searchTodos.length) && 
          <div className="craeteFirstItem">
            <p className="text">Crea tu primer tarea</p>
          </div>
        }
        {searchTodos.map(todo =>(
          <TodoItem 
            key={ todo.text }
            text={ todo.text }
            completed ={ todo.completed }
            onCompleted = {()=>{
              completeTodo(todo.text)
            }}
            onDeleted = {()=>{
              deleteTodo(todo.text)
            }}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal = {setOpenModal}
      />
    </React.Fragment>
    )
}

export { AppUi }