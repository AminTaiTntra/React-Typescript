import React from 'react'

interface InputType {
  label?: string;
  type?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputType> = ({
  label,
  type,
  placeholder,
  name,
  value,
  onChange
}) => {
  return (
    <div>
      <input 
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Input
