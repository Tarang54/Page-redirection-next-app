"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const [name, setName] = useState("");
  const {push} = useRouter();
  const handleSubmit = (event:FormEvent) =>{
    event.preventDefault();
    push(`/prediction/${name}`); 
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div>
        <h1>Enter your name</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your name...."
          value={name}
          className="text-black p-2 m-2 rounded"
          onChange={(e) => setName(e.target.value)}
        />
        <button className="p-2 m-2 bg-blue-500 rounded" type="submit">Predict Data</button>
      </form>
    </div>
  );
}
