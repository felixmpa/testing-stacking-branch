interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

class TodoManager {
  private todos: Todo[] = [];
  private nextId: number = 1;

  addTodo(title: string): Todo {
    const newTodo: Todo = {
      id: this.nextId++,
      title,
      completed: false,
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  listTodos(): Todo[] {
    return this.todos;
  }

  // Marcar una tarea como completada
  completeTodo(id: number): boolean {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.completed = true;
      return true;
    }
    return false;
  }

  // Eliminar una tarea
  deleteTodo(id: number): boolean {
    const index = this.todos.findIndex((t) => t.id === id);
    if (index >= 0) {
      this.todos.splice(index, 1);
      return true;
    }
    return false;
  }
}

const manager = new TodoManager();

manager.addTodo("Estudiar TypeScript");
manager.addTodo("Hacer ejercicio");
manager.completeTodo(1);
manager.deleteTodo(2);

console.log(manager.listTodos());
