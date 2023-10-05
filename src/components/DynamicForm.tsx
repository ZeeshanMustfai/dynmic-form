import { useState } from 'react';
import { dynmicField } from '../mock';

const DynamicForm = () => {
  const [formValues, setFormValues] = useState({});
  
  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log('formData', formValues);
  };

  return (
    <div>
         <form onSubmit={handleSubmit}>
      {dynmicField.map((field, index) => (
        <div key={index}>
          {Array.isArray(field) ? (
            <div>
              {field.map((subField) => (
                <input
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
                <select
                  id={field.id}
                  required={field.required || false}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    {field.placeholder}
                  </option>
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
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
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default DynamicForm;
