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
        <div className="flex items-center gap-2">
            <Image
                src={status == "notdone" ? "/fish.svg" : "/fishingpole.svg"}
                alt="fish icon"
                width={22}
                height={22}
                onClick={() => setWobble(true)}
                onAnimationEnd={() => setWobble(false)}
                aria-hidden="true"
                className={`w-[1.2em] h-[1.2em] ${wobble ? " fish-wobble" : ""}`}
            />
            {status == "notdone" ? task : <s>{task}</s>}
            <br></br>
        </div>
    )
}

export default Task;
