import { useEffect, useState } from "react";
import AddTask from "./components/AddTasks";
import Tasks from "./components/tasks";
import { v4 } from "uuid";
import Title from "./components/Title";

function App() {
  //Salvar os dados coletados do LocalStorage no State
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  useEffect(() => {
    // Armazenar dados quando eles mudarem
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  /*
  useEffect(() => {
    // Chamar API
    
    const fetchTasks = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        },
      );

      //Coletar os dados que ela retornar
      const data = await response.json();
      //Armazenar os dados no State (ou persistir)
      setTasks(data);
    };
    
    // se quiser, chamar API para popular a aplicação com dados de exemplo.
    //  fetchTasks();
  }, []);
*/
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    // Filtrar as tarefas para remover a tarefa com o ID fornecido
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    // Criar um novo objeto de tarefa com um ID único (utilizando o v4() ), título e descrição
    const newTask = {
      id: v4(),
      title,
      description,
      isCompoleted: false,
    };

    setTasks([...tasks, newTask]);
  }
  return (
    // Criar a interface do usuário para exibir as tarefas, adicionar novas tarefas e interagir com as tarefas existentes
    <div className="w-screen  h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4 ">
        <Title>Gerenciador de tarefas</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

// exportar o componente App para que ele possa ser utilizado em outros arquivos, como index.js
export default App;
