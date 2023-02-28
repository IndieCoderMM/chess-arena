import React, { forwardRef } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import styles from './FormInput.module.css';

const FormInput = forwardRef(
  ({ placeholder = '', errorMsg = '', valid = false, type = 'text' }, ref) => {
    return (
      <div className="d-flex flex-column gap-1">
        <div className={styles.group}>
          <input
            ref={ref}
            type={type}
            className={styles.input}
            placeholder={placeholder}
            maxLength={30}
          />
          {!valid && <FaWindowClose />}
        </div>
        {!valid && <small>{errorMsg}</small>}
      </div>
    );
  },
);

export default FormInput;
