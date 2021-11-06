import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'features/auth/authSlice';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import { MainCan, MainRight, WrapperRight, LinkWrapper, ButtonContainer } from './styles';
import Link from 'components/Link';
import { useLocation } from 'react-router-dom';
import Button from 'components/Button';
import { ROLES } from 'constants/constants';

const MainWrapper = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { role } = useSelector((state) => state.auth);

  // encoder based sidebar
  const routesMap = new Map();
  routesMap.set('/', 'HUMAN RESOURCES');
  routesMap.set('/payroll', 'PAYROLL');
  routesMap.set('/attendance', 'ATTENDANCE');
  routesMap.set('/employee-file', 'EMPLOYEE FILE');
  routesMap.set('/memo', 'MEMO');
  routesMap.set('/cash-advance', 'CASH ADVANCE');
  routesMap.set('/request', 'REQUESTS');
  routesMap.set('/for-approval', 'FOR APPROVAL');
  routesMap.set('/reports', 'REPORTS');

  const headerName = routesMap.get(location.pathname);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <MainCan>
        <Sidebar>
          <LinkWrapper>
            {role === ROLES.ENCODER && (
              <>
                <Link to={`/`}>HUMAN RESOURCES</Link>
                <Link to={`/payroll`}>PAYROLL</Link>
                <Link to={`/attendance`}>ATTENDANCE</Link>
                <Link to={`/employee-file`}>EMPLOYEE FILE</Link>
                <Link to={`/memo`}>MEMO</Link>
                <Link to={`/cash-advance`}>CASH ADVANCE</Link>
                <Link to={`/request`}>REQUEST</Link>
              </>
            )}
            {role === ROLES.AUDITOR && (
              <>
                <Link to={`/payroll`}>PAYROLL</Link>
                <Link to={`/attendance`}>ATTENDANCE</Link>
                <Link to={`/employee-file`}>EMPLOYEE FILE</Link>
                <Link to={`/for-approval`}>FOR APPROVAL</Link>
                <Link to={`/reports`}>REPORTS</Link>
              </>
            )}
          </LinkWrapper>
          <ButtonContainer>
            <Button border="1px" borderColor="gray" w="50%" onClick={handleLogout}>
              Logout
            </Button>
          </ButtonContainer>
        </Sidebar>

        <MainRight>
          <Header headerName={headerName} />
          <WrapperRight>{children}</WrapperRight>
        </MainRight>
      </MainCan>
    </>
  );
};

export default MainWrapper;
