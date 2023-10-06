import { useState } from 'react';
import { dynmicField } from '../mock';
import {
  ArrowIcon,
  FormContainer,
  Input,
  SelectContainer,
  SelectInput,
  SubmitButton,
} from '../style/formStyle';
import ThankYou from './Thankyou';

interface PCustomSelect {
  id: string;
  options: [];
  required: boolean;
  onChange: () => void;
}

export const CustomSelect = ({
  id,
  options,
  required,
  onChange,
}: PCustomSelect) => {
  return (
    <SelectContainer>
      <SelectInput onChange={onChange} id={id} required={required}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </SelectInput>
      <ArrowIcon>▼</ArrowIcon>
    </SelectContainer>
  );
};

const DynamicForm = () => {
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const newErrors = {};

    // Validate required fields
    dynmicField.forEach((field) => {
      if (field.required && !formValues[field.id]) {
        newErrors[field.id] = `${field.placeholder} is required.`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setFormErrors(newErrors);
    } else {
      setIsSubmit(true);
    }
  };

  return isSubmit ? (
    <ThankYou handleClose={() => setIsSubmit(false)}/>
  ) : (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        {dynmicField.map((field, index) => (
          <div key={index}>
            {Array.isArray(field) ? (
              <div>
                {field.map((subField) => (
                  <Input
                    key={subField.id}
                    id={subField.id}
                    type={subField.type}
                    placeholder={subField.placeholder}
                    required={subField.required || false}
                    onChange={handleChange}
                  />
                ))}
              </div>
            ) : (
              <>
                {field.type === 'select' ? (
                  <>
                    <CustomSelect
                      id={field.id}
                      options={field.options}
                      onChange={handleChange}
                      required={field.required || false}
                    />
                  </>
                ) : (
                  <Input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required || false}
                    onChange={handleChange}
                  />
                )}
              </>
            )}
          </div>
        ))}
        <SubmitButton type='submit'>Submit</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default DynamicForm;
