import type { Pages } from "../App.tsx";
import React from "react";
import type { Inputs } from "../App.tsx";

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
    <div>
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
    <div>
      <p>Enter Your Info</p>
      <div>
        <p>General Info</p>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" defaultValue={input.name} />
        <br />
        <label htmlFor="surname">Surname</label>
        <input type="text" id="surname" defaultValue={input.surname} />
        <br />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" defaultValue={input.email} />
        <br />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="number" id="phoneNumber" defaultValue={input["phone number"]} />
        <br />
        <label htmlFor="address">Address</label>
        <input type="text" id="address" defaultValue={input.address} />
        <br />
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input type="date" id="dateOfBirth" defaultValue={input["date of birth"]} />
        <br />
        <label htmlFor="linkedin">LinkedIn Profile</label>
        <input type="url" id="linkedin" defaultValue={input.linkedin} />
        <br />
        <label htmlFor="github">GitHub Profile</label>
        <input type="url" id="github" defaultValue={input.github} />
        <br />
      </div>
      <div>
        <p>Professional Summary</p>
        <textarea id="summary" defaultValue={input.summary} rows={5} />
        <br />
      </div>
      <div>
        <p>Education</p>
        <textarea id="education" defaultValue={input.education} rows={5} />
        <br />
      </div>
      <div>
        <p>Work Experience</p>
        <textarea id="experience" defaultValue={input.experience} rows={5} />
        <br />
      </div>
      <div>
        <p>Skills</p>
        <textarea id="skills" defaultValue={input.skills} rows={3} />
        <br />
      </div>
      <div>
        <p>Certifications</p>
        <textarea id="certifications" defaultValue={input.certifications} rows={3} />
        <br />
      </div>
      <div>
        <p>References</p>
        <textarea id="references" defaultValue={input.references} rows={3} />
        <br />
      </div>
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
    <div>
      <p>Welcome To CV generator</p>
      <button onClick={() => setPage("enterInfo")}> new CV </button>
      <button onClick={() => setPage("homePage")}>Home</button>
    </div>
  );
}

export { HomePage, EnterInfo, Result };