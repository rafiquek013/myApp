import { Helmet } from 'react-helmet-async';

import { ResetPasswordView } from 'src/sections/resetPassword';


export default function ForgetPassword() {
    return (
      <>
        <Helmet>
          <title> Reset Password | MY APP </title>
        </Helmet>
  
        <ResetPasswordView />
      </>
    );
  }