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
        <li className="flex gap-2">
            <Image
                src={status == "notdone" ? "/fish.svg" : "/fishingpole.svg"}
                alt=""
                width={22}
                height={22}
                onClick={() => setWobble(true)}
                onAnimationEnd={() => setWobble(false)}
                aria-hidden="true"
                className={`w-[1.2em] h-[1.2em] mt-0.75 ${wobble ? " fish-wobble" : ""}`}
            />
            <div>
            {status == "notdone" ? task : <s>{task}</s>}
            </div>
        </li>
    )
}

export default Task;
