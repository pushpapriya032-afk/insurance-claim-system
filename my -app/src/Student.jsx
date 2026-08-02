function Student(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h2>Department: {props.department}</h2>
      <h2>CGPA: {props.cgpa}</h2>
    </div>
  );
}

export default Student;