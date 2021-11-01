import { useEffect } from 'react';
import { Container, Left, Right, LoginContainer, Header, Form, Powered } from './styles.js';
import InputField from 'components/Input/index.jsx';
import Button from 'components/Button/index.jsx';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';

import { useForm, FormProvider } from 'react-hook-form';

import { useDispatch } from 'react-redux';
import { signinUser, clearState } from 'features/auth/authSlice.js';

const LoginPage = () => {
  const methods = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(signinUser(data));
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Left>
        <Powered>
          <p>POWERED BY:</p>
          <h1>FANART INC.</h1>
        </Powered>
      </Left>
      <Right>
        <Logo />
        <LoginContainer>
          <FormProvider {...methods}>
            <Form onSubmit={methods.handleSubmit(onSubmit)}>
              <Header>Login</Header>
              <InputField uname name="username" required />
              <InputField pwd name="password" required />
              <Button type="submit">Log in</Button>
            </Form>
          </FormProvider>
        </LoginContainer>
      </Right>
    </Container>
  );
};

export default LoginPage;
