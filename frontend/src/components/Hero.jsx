import { Container, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../slices/authSlice';
import { useLogoutMutation } from '../slices/usersApiSlice';

const Hero = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logoutApiCall] = useLogoutMutation();
  const logoutHandler = async () => {
    try {
      alert('Signing out');
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=' py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
          <h1 className='text-center mb-4'>Authentication</h1>
          <p className='text-center mb-4'>
            A full-stack MERN application for user management and authentication using JSON Web Tokens and HttpOnly cookies
          </p>
          <div className='d-flex'>
            {!userInfo ? (
              <>
                <LinkContainer to='/login'>
                  <Button variant='primary' className='me-3'>
                    Sign In
                  </Button>
                </LinkContainer>
                <LinkContainer to='/register'>
                  <Button variant='secondary' className='me-3'>
                    Register
                  </Button>
                </LinkContainer>
              </>
            ) : (
              <>
                <LinkContainer to='/'>
                  <Button variant='secondary' onClick={logoutHandler}>
                    Logout
                  </Button>
                </LinkContainer>
              </>
            )}
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;