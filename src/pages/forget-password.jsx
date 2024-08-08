import { Helmet } from 'react-helmet-async';

import ForgetPasswordView from 'src/sections/forgetPassword/forget-password';

export default function ForgetPassword() {
    return (
      <>
        <Helmet>
          <title> Forget Password | MY APP </title>
        </Helmet>
  
        <ForgetPasswordView />
      </>
    );
  }