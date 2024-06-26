"use client";

import { Body, H1 } from "@/shortcodes/formatting";
import QA from "./QA";

const dataQA = [
    {
        question: "Do your PreFab Homes leak?",
        answer: "We emphasize the importance of product integrity and performance in our expandable homes, ensuring they provide safe and comfortable living spaces when installed and expanded correctly. We clarify that instances of leakage are typically due to improper installation, often involving counterfeit versions of our products. Proper sealing and installation are crucial to maintain structural integrity and weather resistance. To enhance protection, we offer solutions like adding flashings and incorporating pitched roofs with guttering systems, directing rainwater away from the structure. We advise consulting our experts during installation to ensure correct setup and explore additional options for weather resistance, demonstrating our commitment to quality and customer satisfaction.",
    },
    {
        question: "Is the PreFab Homes relocatable?",
        answer: "The prefab home can be relocated using a base trailer on private land or transported by truck with a crane. Before moving, it must be folded, and plumbing, electrical, and fixed services disconnected by a qualified tradesperson. Internal furnishings, flashings, kitchen, and cover strips must also be removed. Check with local authorities and landowners to ensure the new location meets regulations. Preparation is crucial for a smooth relocation of your prefab home.",
    },
    {
        question: "Is there Council Approval for Prefab?",
        answer: "In Australia, our Prefab Homes may not meet building standards for permanent dwelling use or other purposes. It's important to verify with your local council to understand specific regulations. Before using a Prefab Home for anything other than transportable/caravan or temporary dwelling purposes, ensure compliance with local standards by contacting your local council.",
    },
    {
        question: "What are you turnaround times?",
        answer: "Our standard turnaround time for manufacturing and delivering PreFab Home is about 2 months, though this can vary based on the type of PreFab Home and any additional options chosen. The process includes pre-order checks, design, engineering, fabrication, assembly, quality checks, transportation, and delivery."

    },
]

const FAQ = () => {
    return (
        <Body>
            <H1>FAQ</H1>
            {dataQA.map((data, i) =>
                <div key={i}>
                    <QA
                        question={data.question}
                        answer={data.answer}
                    />
                </div>
            )}
        </Body>
    )
}

export default FAQ