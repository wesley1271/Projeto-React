import { useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    /* Criar a interface do usuário para exibir os detalhes da tarefa, incluindo o título e a descrição
     e um botão para voltar à página anterior */
    <div className="h-screen w-screen bg-slate-500 p-6 ">
      <div className="w-[500px] space-y-4 ">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da tarefa</Title>
        </div>
        <div className=" bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl text-slate-700 font-semibold">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
