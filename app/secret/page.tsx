"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Task from "@/components/Task";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full gap-4">
      <div className="flex flex-col w-full max-w-[770px] mx-auto items-center min-h-dvh p-4 gap-8 font-solanel">
        <Header />
        <main className="flex flex-col flex-grow gap-2 justify-center items-start w-full">
          <section className="justify-start">
            <h1 className="text-8xl">To-Do</h1>
          </section>
          <section className="flex flex-col max-w-full gap-8 sm:gap-12 items-center">
            <div className="flex flex-col gap-4 items-center">
              <div className="">
                <Task
                  status={"notdone"}
                  task={"Work on Projects template"}
                />
                <Task
                  status={"notdone"}
                  task={"Implement Visual Arts subsections"}
                />
                <Task
                  status={"done"}
                  task={"Implement Visual Arts gallery template"}
                />
                <Task
                  status={"done"}
                  task={"Make horizontal padding consistent between header/body/footer"}
                />
                <Task
                  status={"done"}
                  task={"Make screen resizing not look awful"}
                />
                <Task
                  status={"done"}
                  task={"Implement About page"}
                />
              </div>
            </div>
          </section>
        </main>
      
      <Footer />
      </div>
    </div>
  );
}
