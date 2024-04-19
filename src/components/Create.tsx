import { Form } from "react-router-dom";

function Create() {
  return (
    <div className="create-container">
      <Form action="/create" method="post">
        <label htmlFor="length">
          How many minutes did you meditate?
          <input type="number" name="length" id="length" />
        </label>
        <label htmlFor="before">
          How did you feel before?
          <input type="text" name="before" id="before" />
        </label>
        <label htmlFor="after">
          How did you feel after?
          <input type="text" name="after" id="after" />
        </label>
        <label htmlFor="thoughts">
          What thoughts came up?
          <input type="text" name="thoughts" id="thoughts" />
        </label>
        <button>Add entry.</button>
      </Form>
    </div>
  );
}

export default Create;
