import React, { MouseEventHandler } from 'react'

interface ButtonTypes {
  label?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: 'button'| 'submit';
  value?:string;
}

const Button : React.FC<ButtonTypes> = ({
  type,
  value,
  onClick,
  className
}) => {
  return (
    <div>
      <button 
        type={type}
        className={className}
        onClick={onClick}
      >{value}</button>

    </div>
  )
}

export default Button
