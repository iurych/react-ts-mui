import { ListToolBars } from '../../shared/components';
import { BaseLayout } from '../../shared/layouts';

export const Dashboard = () => {
  return (
    <BaseLayout
      title='Página inicial'
      toolsBars={<ListToolBars showSearch searchNewBtn='Novo' />}
    >
      testando
    </BaseLayout>
  );
};
