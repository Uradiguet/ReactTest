import Link from "next/link";
import TodoItems from "@/models/TodoItems";
import {randomUUID} from "node:crypto";
import TodoItemsComponent from "@/components/TodoItemsComponent";

const defaultTodoItems = [
    new TodoItems(randomUUID(),"Faire les courses",false).toSimpleObject(),
    new TodoItems(randomUUID(),"Acheter du pain",false).toSimpleObject(),
    new TodoItems(randomUUID(),"Acheter du lait",false).toSimpleObject(),
    new TodoItems(randomUUID(),"Acheter du beurre",true).toSimpleObject(),
    new TodoItems(randomUUID(),"Acheter du fromage",false).toSimpleObject(),
    new TodoItems(randomUUID(),"Acheter des oeufs",false).toSimpleObject(),
    new TodoItems(randomUUID(),"Acheter de la farine",false).toSimpleObject(),
    new TodoItems(randomUUID(),"Acheter du sucre",false).toSimpleObject(),
    ];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <p className= "text-2xl text-teal-600 font-bold">Goyave Enjoyer</p>
          <TodoItemsComponent items={defaultTodoItems}/>
          <Link href={"/settings"} className={"outline-1 outline-teal-600 font-semibold px-4 rounded-3xl"}>Vers les Paramètres</Link>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
