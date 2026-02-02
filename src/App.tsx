import { useState } from "react";
import { HomePage, EnterInfo, Result } from "./components/showPage";

export type Pages = "homePage" | "enterInfo" | "result";

const preInput = {
  name: "Setareh",
  surname: "O",
  email: "E@gmail.com",
  "phone number": +99244243,
  address: "123 Example St, City, Country",
  "date of birth": "1990-01-01",
  linkedin: "https://linkedin.com/in/example",
  github: "https://github.com/example",
  summary: "A brief professional summary...",
  education: "Degree in Field from University, Year...",
  experience: "Job Title at Company, Dates...",
  skills: "Skill1, Skill2, Skill3...",
  certifications: "Cert1, Cert2...",
  references: "Available upon request...",
};

export type Inputs = typeof preInput;

export function App() {
  const [page, setPage] = useState<Pages>("homePage");
  const [input, setInput] = useState<Inputs>(preInput);
  return (
    <>
      {page === "homePage" ? (
        <HomePage setPage={setPage} />
      ) : page === "enterInfo" ? (
        <EnterInfo setPage={setPage} setInput={setInput} input={input} />
      ) : (
        <Result setPage={setPage} input={input} />
      )}
    </>
  );
}