import "./App.css";
import Student from "./Student";

function App() {
  return (
    <div>
      <h1>Student Information</h1>

      <Student
        name="Santhya"
        department="CSE"
        cgpa={8.89}
      />

      <Student
        name="Rahul"
        department="IT"
        cgpa={8.45}
      />

      <Student
        name="Priya"
        department="ECE"
        cgpa={9.10}
      />
    </div>
  );
}

export default App;