import { AppRoutes } from './routes';
import { SideMenu } from './shared/components';

export const App = () => {
  return (
    <>
      <SideMenu>
        <AppRoutes />
      </SideMenu>
    </>
  );
};
