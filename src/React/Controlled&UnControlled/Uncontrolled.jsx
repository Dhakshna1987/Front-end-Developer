
// Uncontrolled Component

// An uncontrolled component is when the form data is handled by the DOM itself, rather than the component’s state.
//  You let the input element manage its own state, and you retrieve the current value only when necessary, 
// usually using a ref.

// Key Characteristics:

// The form input’s value is not tied to any React state.
// React does not control the input’s state or value directly.
// You typically use refs to access the input’s value when needed (e.g., on form submission).
Example:

function UncontrolledComponent() {
    const inputRef = React.useRef();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`Name: ${inputRef.current.value}`); // Accessing the value using ref
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    );
  }
  