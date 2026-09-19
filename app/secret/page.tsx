import Task from "@/components/Task";

export default function Home() {
  return (
    <main className="flex grow flex-col justify-center gap-2">
      <h1 className="text-7xl">To-Do</h1>
      <ul>
        <Task status={"notdone"} task={"Work on Projects template"} />
        <Task status={"notdone"} task={"Implement Visual Arts subsections"} />
        <Task status={"done"} task={"Implement Visual Arts gallery template"} />
        <Task
          status={"done"}
          task={"Make horizontal padding consistent between header/body/footer"}
        />
        <Task status={"done"} task={"Make screen resizing not look awful"} />
        <Task status={"done"} task={"Implement About page"} />
      </ul>
    </main>
  );
}
