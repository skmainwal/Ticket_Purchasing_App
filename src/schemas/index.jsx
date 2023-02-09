import * as Yup from 'yup';


// Added a validation schema
export const checkoutSchema= Yup.object({
    name:Yup.string().min(2).max(20).required('Please enter your name'),
    email:Yup.string().email().required("Please enter your email"),
    mobile_number:Yup.number().min(10).required("Please enter your mobile number"),
    card_number:Yup.number().min(15).required("Please enter your card no.")
})