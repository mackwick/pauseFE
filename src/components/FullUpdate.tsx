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

const FullUpdate: React.FC<Props> = ({
  action,
  method,
  buttontxt,
  defaultval_after,
  defaultval_before,
  defaultval_length,
  defaultval_thoughts,
}) => {
  return (
    <div className="create-container update-container">
      <Form action={action} method={method} className="create-form">
        <label htmlFor="length">
          How many minutes did you meditate?
          <input
            type="number"
            name="length"
            id="length"
            defaultValue={defaultval_length}
            className="form-input"
          />
        </label>
        <label htmlFor="before">
          How did you feel before (in five words or less)?
          <input
            type="text"
            name="before"
            id="before"
            defaultValue={defaultval_before}
            className="form-input"
          />
        </label>
        <label htmlFor="after">
          How did you feel after (in five words or less)?
          <input
            type="text"
            name="after"
            id="after"
            defaultValue={defaultval_after}
            className="form-input"
          />
        </label>
        <label htmlFor="thoughts">
          Did any thoughts come up?
          <textarea
            name="thoughts"
            id="thoughts"
            defaultValue={defaultval_thoughts}
            className="form-input"
          />
        </label>
        <button>{buttontxt}</button>
      </Form>
    </div>
  );
};

export default FullUpdate;
