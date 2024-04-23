import { Form, FormMethod } from "react-router-dom";

type Props = {
  action: string;
  method: FormMethod;
  buttontxt: string;
};

const Create1: React.FC<Props> = ({ action, method, buttontxt }) => {
  return (
    <div className="create1-container">
      <Form action={action} method={method} className="create1-form">
        <label htmlFor="length">
          How many minutes would you like to meditate?
          <input type="number" name="length" id="length" />
        </label>
        <label htmlFor="before">
          How are you feeling now (in five words or fewer)?
          <input type="text" name="before" id="before" />
        </label>
        <button>{buttontxt}</button>
      </Form>
    </div>
  );
};

export default Create1;
