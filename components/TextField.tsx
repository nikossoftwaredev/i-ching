/* eslint-disable react/jsx-props-no-spreading */
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type TextFieldProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const TextField = (props: TextFieldProps) => {
  const { className = '' } = props;

  return (
    <div className='form-control w-full max-w-xs'>
      <label className='label'>
        <span className='label-text font-bold capitalize'>{props.id}</span>
      </label>
      <input {...props} className={`input input-bordered w-full ${className}`} />
    </div>
  );
};

export default TextField;
