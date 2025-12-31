import { useActionState, use } from "react";
import { OpinionsContext } from "../store/opinions-context";
import Submit from "./Submit";

export function NewOpinion() {
  const { addOpinion } = use(OpinionsContext);
  async function newOptionAction(prevFormState, formData) {
    const title = formData.get('title');
    const body = formData.get('body');
    const userName = formData.get('userName');

    const errors = [];

    if (!title) {
      errors.push('Please, provide a title');
    }
    if (!body) {
      errors.push('Please, provide a opinion');
    }
    if (!userName) {
      errors.push('Please, provide your name');
    }

    if(errors.length) {
      return {
        errors,
        values: {
          title,
          body,
          userName
        }
      }
    }

    await addOpinion({
          title,
          body,
          userName
        })

    return {
      errors: null,
    }
  }
  const [formState, formAction, pending] = useActionState(newOptionAction, { errors: null })
  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" defaultValue={formState.values?.userName} />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" defaultValue={formState.values?.title} />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5} defaultValue={formState.values?.body}></textarea>
        </p>
        {
          formState.errors &&  <ul className="errors">
            {
              formState.errors.map((error) => (
                <li key={error}>{error}</li>
              ))
            }
          </ul>
        }

        <Submit />
      </form>
    </div>
  );
}
