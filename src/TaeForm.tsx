import React, { useState } from 'react';

type Param = {
  name: string;
  desc: string;
};
type TaeFormProps = {
  onSubmit: (form: Param) => void;
};

function TaeForm({ onSubmit }: TaeFormProps) {
  const [form, setForm] = useState<Param>({
    name: '',
    desc: '',
  });

  const { name, desc } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: '',
      desc: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={onChange} />
      <input name="desc" value={desc} onChange={onChange} />
      <button type="submit">Register</button>
    </form>
  );
}

export default TaeForm;
