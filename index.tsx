<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TypeScript TODO App</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 2rem;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            overflow: hidden;
        }

        .header {
            background: linear-gradient(135deg, #4f46e5, #7c3aed);
            color: white;
            padding: 2rem;
            text-align: center;
        }

        .header h1 {
            font-size: 2rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
        }

        .input-section {
            padding: 2rem;
            border-bottom: 1px solid #e5e7eb;
        }

        .input-container {
            display: flex;
            gap: 1rem;
        }

        #todoInput {
            flex: 1;
            padding: 0.75rem 1rem;
            border: 2px solid #e5e7eb;
            border-radius: 8px;
            font-size: 1rem;
            outline: none;
            transition: border-color 0.2s;
        }

        #todoInput:focus {
            border-color: #4f46e5;
        }

        #addBtn {
            padding: 0.75rem 1.5rem;
            background: #4f46e5;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.2s;
        }

        #addBtn:hover {
            background: #4338ca;
        }

        .todo-list {
            padding: 1rem 2rem 2rem;
        }

        .todo-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            margin-bottom: 0.5rem;
            background: #f8fafc;
            border-radius: 8px;
            border: 1px solid #e2e8f0;
            transition: all 0.2s;
        }

        .todo-item:hover {
            background: #f1f5f9;
            border-color: #cbd5e1;
        }

        .todo-item.completed {
            opacity: 0.6;
            text-decoration: line-through;
        }

        .todo-checkbox {
            width: 18px;
            height: 18px;
            cursor: pointer;
        }

        .todo-text {
            flex: 1;
            font-size: 1rem;
            color: #374151;
        }

        .delete-btn {
            padding: 0.5rem;
            background: #ef4444;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-size: 0.875rem;
            transition: background-color 0.2s;
        }

        .delete-btn:hover {
            background: #dc2626;
        }

        .empty-state {
            text-align: center;
            color: #6b7280;
            font-style: italic;
            padding: 2rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📝 TODO App</h1>
            <p>Stay organized with TypeScript</p>
        </div>
        
        <div class="input-section">
            <div class="input-container">
                <input 
                    type="text" 
                    id="todoInput" 
                    placeholder="What needs to be done?"
                    maxlength="100"
                >
                <button id="addBtn">Add Todo</button>
            </div>
        </div>
        
        <div class="todo-list">
            <div id="todoContainer"></div>
        </div>
    </div>

    <script>
        // TypeScript-style interfaces (using JSDoc for type hints in regular JS)
        
        /**
         * @typedef {Object} Todo
         * @property {number} id
         * @property {string} text
         * @property {boolean} completed
         */

        class TodoApp {
            constructor() {
                /** @type {Todo[]} */
                this.todos = [];
                this.nextId = 1;
                
                this.todoInput = document.getElementById('todoInput');
                this.addBtn = document.getElementById('addBtn');
                this.todoContainer = document.getElementById('todoContainer');
                
                this.setupEventListeners();
                this.render();
            }
            
            setupEventListeners() {
                this.addBtn.addEventListener('click', () => this.addTodo());
                this.todoInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        this.addTodo();
                    }
                });
            }
            
            /**
             * Add a new todo
             */
            addTodo() {
                const text = this.todoInput.value.trim();
                
                if (text === '') {
                    this.todoInput.focus();
                    return;
                }
                
                /** @type {Todo} */
                const newTodo = {
                    id: this.nextId++,
                    text: text,
                    completed: false
                };
                
                this.todos.push(newTodo);
                this.todoInput.value = '';
                this.todoInput.focus();
                this.render();
            }
            
            /**
             * Toggle todo completion status
             * @param {number} id
             */
            toggleTodo(id) {
                this.todos = this.todos.map(todo => 
                    todo.id === id 
                        ? { ...todo, completed: !todo.completed }
                        : todo
                );
                this.render();
            }
            
            /**
             * Delete a todo
             * @param {number} id
             */
            deleteTodo(id) {
                this.todos = this.todos.filter(todo => todo.id !== id);
                this.render();
            }
            
            /**
             * Render the todo list
             */
            render() {
                if (this.todos.length === 0) {
                    this.todoContainer.innerHTML = `
                        <div class="empty-state">
                            No todos yet. Add one above to get started!
                        </div>
                    `;
                    return;
                }
                
                this.todoContainer.innerHTML = this.todos
                    .map(todo => `
                        <div class="todo-item ${todo.completed ? 'completed' : ''}">
                            <input 
                                type="checkbox" 
                                class="todo-checkbox"
                                ${todo.completed ? 'checked' : ''}
                                onchange="todoApp.toggleTodo(${todo.id})"
                            >
                            <span class="todo-text">${this.escapeHtml(todo.text)}</span>
                            <button 
                                class="delete-btn"
                                onclick="todoApp.deleteTodo(${todo.id})"
                            >
                                Delete
                            </button>
                        </div>
                    `)
                    .join('');
            }
            
            /**
             * Escape HTML to prevent XSS
             * @param {string} text
             * @return {string}
             */
            escapeHtml(text) {
                const div = document.createElement('div');
                div.textContent = text;
                return div.innerHTML;
            }
        }
        
        // Initialize the app
        const todoApp = new TodoApp();
    </script>
</body>
</html>