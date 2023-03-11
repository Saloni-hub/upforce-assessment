import * as Yup from 'yup';

const baseSchema = Yup.object().shape({
    firstName: Yup.string().required('FirstName is required field'),
    middleName: Yup.string().required('MiddleName is required field'),
    lastName: Yup.string().required('LastName is required field'),
    mobileNo: Yup.string().min(10).max(10).required('MobileNo is required field'),
    email: Yup.string().email().required('email is required field'),
    dob: Yup.string().required('Birthday is required field'),
    age: Yup.number().min(0.1).max(100).required('Age is required field'),
    bloodGroup: Yup.string().required('BloodGroup is required field'),
    height: Yup.string().required('Height is required field'),
    weight: Yup.string().required('Weight is required field'),
    gender: Yup.number().required('Please select your gender'),
    maritalStatus: Yup.number().required('Please select your Marital Status'),
    addressLine1: Yup.string().required('AddressLine1 is required field'),
    addressLine2: Yup.string().required('AddressLine2 is required field'),
    city: Yup.string().required('City is required field'),
    state: Yup.string().required('State is required field'),
    country: Yup.string().required('Country is required field'),
    pinCode: Yup.string().required('PinCode is required field'),
})

export default baseSchema;
