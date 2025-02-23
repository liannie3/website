"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Task from "@/components/Task";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full gap-4">
      <div className="grid grid-rows-[20px_1fr_20px] w-full max-w-[740px] mx-auto items-center justify-items-center min-h-screen p-4 pb-8 gap-8 sm:p-4 font-solanel">
        <Header />
      
        <main className="flex flex-col gap-2 row-start-2 items-center sm:items-start w-full">
          <section className="justify-start">
            <h1 className="text-8xl">To-Do</h1>
          </section>
          <section className="flex flex-col sm:flex-row max-w-full gap-8 sm:gap-12 items-center">
            <div className="flex flex-col gap-4 items-center">
              <div className="">
                <Task
                  status={"notdone"}
                  task={"Improve mobile layout"}
                />
                <Task
                  status={"notdone"}
                  task={"Implement Projects template"}
                />
                <Task
                  status={"notdone"}
                  task={"Implement Visuals gallery template"}
                />
                <Task
                  status={"notdone"}
                  task={"Implement Visuals subsections"}
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
