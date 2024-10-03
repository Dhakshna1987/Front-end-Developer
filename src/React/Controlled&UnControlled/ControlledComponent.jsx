Controlled Components:
---------------------

A controlled component is when form data is handled by the component state.
In this case, React controls the form elements' values, and the value of each form field is always determined 
by the state. This gives you full control over the form and makes it easier to track and update the state based 
on user input.




function ControlledComponent() {
  const [name, setName] = React.useState("");

  const handleChange = (event) => {
    setName(event.target.value); // Updates the state
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <p>Name: {name}</p>
    </div>
  );
}
