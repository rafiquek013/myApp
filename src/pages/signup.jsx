import { Helmet } from 'react-helmet-async';

import SingUpView from 'src/sections/signup/sign-up-view';

export default function SignUpPage() {
    return (
      <>
        <Helmet>
          <title> Sign Up | MY APP </title>
        </Helmet>
  
        <SingUpView />
      </>
    );
  }