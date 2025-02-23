import Image from "next/image";

interface TaskProps {
    status: "notdone" | "done";
    task: string;
  }

function Task({status, task}: TaskProps) {
    return (
        <div className="flex items-center">
            {status == "notdone" ? (
                <>
                    <Image
                        src="/fish.svg"
                        alt="icon"
                        width={22}
                        height={22}
                        className="mr-2"
                    />
                    {task}<br></br>
                </>
            ) : (
                <>
                    <Image
                        src="/fishingpole.svg"
                        alt="icon"
                        width={22}
                        height={22}
                        className="mr-2"
                    />
                    <s>{task}</s><br></br>
                </>
            )}
        </div>
    )
}

export default Task;