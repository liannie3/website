"use client";
import Image from "next/image";
import { useState } from "react";

interface TaskProps {
    status: "notdone" | "done";
    task: string;
  }

function Task({status, task}: TaskProps) {
    const [wobble, setWobble] = useState(false);

    return (
        <div className="flex items-center">
            <Image
                src={status == "notdone" ? "/fish.svg" : "/fishingpole.svg"}
                alt="icon"
                width={22}
                height={22}
                onClick={() => setWobble(true)}
                onAnimationEnd={() => setWobble(false)}
                className={`mr-2${wobble ? " fish-wobble" : ""}`}
            />
            {status == "notdone" ? task : <s>{task}</s>}
            <br></br>
        </div>
    )
}

export default Task;
