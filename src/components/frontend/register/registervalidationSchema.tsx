import * as yup from 'yup';
const phoneRegExp = /^\+?(\d{1,3})?[-.\s]?(\(?\d{1,4}?\)?)[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

export const typeValidationSchema = yup.object().shape({
    fullName: yup.string().min(5,'name should be 5 characters long').required('name is required').matches(/^[a-zA-Z \s]+$/, 'name must be a string'),
    email: yup.string().required('email is required').matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Enter a valid email address'
),
    password: yup.string().required('password is required'),
    confirmPassword: yup.string()
    .oneOf([yup.ref('password'),], 'Passwords must match')
    .required('Confirm password is required'),
    phone:yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone number is required')
 // sort: yup.string().matches(/^[0-9]+$/, 'form:error-sort-must-be-number')

    
});
