import { DetailsTools } from '../../shared/components';
import { BaseLayout } from '../../shared/layouts';

export const Dashboard = () => {
  return (
    <BaseLayout
      title='Página inicial'
      toolsBars={<DetailsTools />}
    >
      testando
    </BaseLayout>
  );
};
