import { FunctionComponent } from 'react';

interface ICreateForm {
  entityType: string;
  handleCreateEntity(event: any): void;
}

const CreateForm: FunctionComponent<ICreateForm> = ({
  entityType,
  handleCreateEntity,
  children,
}) => {
  return (
    <form action="#">
      <fieldset>
        <legend>Create {entityType}</legend>
        {children}

        <div className="form-group">
          <button
            className="btn btn-default"
            role="button"
            name="submit"
            onClick={handleCreateEntity}
          >
            Create {entityType}
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export { CreateForm };
