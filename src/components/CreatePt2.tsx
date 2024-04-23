import { Form, FormMethod } from "react-router-dom";

type Props = {
  action: string;
  method: FormMethod;
  buttontxt: string;
  defaultval_length: string;
  defaultval_before: string;
  defaultval_after: string;
  defaultval_thoughts: string;
};

const Create2Form: React.FC<Props> = ({
  action,
  method,
  buttontxt,
  defaultval_after,
  defaultval_before,
  defaultval_length,
  defaultval_thoughts,
}) => {
  return (
    <div className="create-container">
      <Form action={action} method={method}>
        <label htmlFor="length">
          How many minutes did you meditate?
          <input
            type="number"
            name="length"
            id="length"
            defaultValue={defaultval_length}
          />
        </label>
        <label htmlFor="before">
          How did you feel before?
          <input
            type="text"
            name="before"
            id="before"
            defaultValue={defaultval_before}
          />
        </label>
        <label htmlFor="after">
          How did you feel after?
          <input
            type="text"
            name="after"
            id="after"
            defaultValue={defaultval_after}
          />
        </label>
        <label htmlFor="thoughts">
          What thoughts came up?
          <input
            type="text"
            name="thoughts"
            id="thoughts"
            defaultValue={defaultval_thoughts}
          />
        </label>
        <button>{buttontxt}</button>
      </Form>
    </div>
  );
};

export default Create2Form;
