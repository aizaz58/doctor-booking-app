import * as yup from 'yup';

export const logInValidationSchema = yup.object().shape({
    email: yup.string().required('email is required').matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Enter a valid email address'
),
    password: yup.string().required('password is required'),
   
 // sort: yup.string().matches(/^[0-9]+$/, 'form:error-sort-must-be-number')

    
});
