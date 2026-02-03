import type { Pages } from "../App.tsx";
import React from "react";
import type { Inputs } from "../App.tsx";
import "../styles/HomePage.css";
import "../styles/EnterInfo.css";
import "../styles/Result.css";
type SetPage = React.Dispatch<React.SetStateAction<Pages>>;

type ResultProps = {
  setPage: SetPage;
  input: Inputs;
};

type EnterInfoProps = {
  setPage: SetPage;
  setInput: React.Dispatch<React.SetStateAction<Inputs>>;
  input: Inputs;
};

function Result({ setPage, input }: ResultProps) {
  return (
    <div className="result-container">
      <p>CV</p>
      <ul>
        {Object.entries(input).map(([key, val]) => (
          <li key={key}>
            {key} : {val}
          </li>
        ))}
      </ul>
      <button onClick={() => setPage("enterInfo")}>Edit</button>
      <button onClick={() => setPage("homePage")}>Home</button>
    </div>
  );
}

function EnterInfo({ setPage, setInput, input }: EnterInfoProps) {
  return (
<div className="enter-info-container">
  <h1>Build Your CV</h1>

  <section className="section general">
    <h2>Personal Information</h2>
    <div className="form-grid">
      <div className="form-group">
        <label htmlFor="name">First Name</label>
        <input type="text" id="name" defaultValue={input.name} placeholder="e.g. Setareh" />
      </div>

      <div className="form-group">
        <label htmlFor="surname">Last Name</label>
        <input type="text" id="surname" defaultValue={input.surname} placeholder="e.g. O" />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" defaultValue={input.email} placeholder="example@email.com" />
      </div>

      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="tel" id="phoneNumber" defaultValue={input["phone number"]} placeholder="+99 123 456 789" />
      </div>

      <div className="form-group full-width">
        <label htmlFor="address">Address</label>
        <input type="text" id="address" defaultValue={input.address} placeholder="Street, City, Country" />
      </div>

      <div className="form-group">
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input type="date" id="dateOfBirth" defaultValue={input["date of birth"]} />
      </div>

      <div className="form-group">
        <label htmlFor="linkedin">LinkedIn</label>
        <input type="url" id="linkedin" defaultValue={input.linkedin} placeholder="https://linkedin.com/in/yourname" />
      </div>

      <div className="form-group">
        <label htmlFor="github">GitHub</label>
        <input type="url" id="github" defaultValue={input.github} placeholder="https://github.com/yourusername" />
      </div>
    </div>
  </section>

  <section className="section">
    <h2>Professional Summary</h2>
    <textarea id="summary" defaultValue={input.summary} rows={5} placeholder="A short, powerful summary of your experience, skills and career goals..." />
  </section>

  <section className="section">
    <h2>Education</h2>
    <textarea id="education" defaultValue={input.education} rows={5} placeholder="Degree • Institution • Graduation Year\nAdditional details..." />
  </section>

  <section className="section">
    <h2>Work Experience</h2>
    <textarea id="experience" defaultValue={input.experience} rows={6} placeholder="Job Title • Company • Dates\n• Key responsibility / achievement\n• Another achievement..." />
  </section>

  <section className="section">
    <h2>Skills</h2>
    <textarea id="skills" defaultValue={input.skills} rows={4} placeholder="React, TypeScript, JavaScript, CSS, Git, Teamwork, Problem Solving..." />
  </section>

  <section className="section">
    <h2>Certifications & Awards</h2>
    <textarea id="certifications" defaultValue={input.certifications} rows={4} placeholder="• AWS Certified Developer – 2024\n• Google Data Analytics – 2023..." />
  </section>

  <section className="section">
    <h2>References</h2>
    <textarea id="references" defaultValue={input.references} rows={3} placeholder="Available upon request" />
  </section>
      <button
        onClick={() => {
          setPage("result");
          setInput({
            name: (document.getElementById("name") as HTMLInputElement | null)?.value ?? "",
            surname: (document.getElementById("surname") as HTMLInputElement | null)?.value ?? "",
            email: (document.getElementById("email") as HTMLInputElement | null)?.value ?? "",
            "phone number": Number((document.getElementById("phoneNumber") as HTMLInputElement | null)?.value ?? -1),
            address: (document.getElementById("address") as HTMLInputElement | null)?.value ?? "",
            "date of birth": (document.getElementById("dateOfBirth") as HTMLInputElement | null)?.value ?? "",
            linkedin: (document.getElementById("linkedin") as HTMLInputElement | null)?.value ?? "",
            github: (document.getElementById("github") as HTMLInputElement | null)?.value ?? "",
            summary: (document.getElementById("summary") as HTMLTextAreaElement | null)?.value ?? "",
            education: (document.getElementById("education") as HTMLTextAreaElement | null)?.value ?? "",
            experience: (document.getElementById("experience") as HTMLTextAreaElement | null)?.value ?? "",
            skills: (document.getElementById("skills") as HTMLTextAreaElement | null)?.value ?? "",
            certifications: (document.getElementById("certifications") as HTMLTextAreaElement | null)?.value ?? "",
            references: (document.getElementById("references") as HTMLTextAreaElement | null)?.value ?? "",
          });
        }}
      >
        Generate CV
      </button>
      <button onClick={() => setPage("homePage")}>Home</button>
    </div>
  );
}

function HomePage({ setPage }: { setPage: SetPage }) {
  return (
    <div className="home-container">
      <p>Welcome To CV generator</p>
      <button onClick={() => setPage("enterInfo")}> new CV </button>
      <button onClick={() => setPage("homePage")}>Home</button>
    </div>
  );
}

export { HomePage, EnterInfo, Result };