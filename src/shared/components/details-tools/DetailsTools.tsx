import { Box, Button, Divider, Icon, Paper, useTheme } from '@mui/material';

export const DetailsTools = () => {
  const theme = useTheme();
  return (
    <Box
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={2}
      display='flex'
      alignItems='center'
      gap={1}
      component={Paper}
    >
      <Button
        color='primary'
        disableElevation
        variant='contained'
        startIcon={<Icon> save </Icon>}
      >
        Salvar
      </Button>
      <Button
        color='primary'
        disableElevation
        variant='outlined'
        startIcon={<Icon> save </Icon>}
      >
        Salvar e voltar
      </Button>
      <Button
        color='primary'
        disableElevation
        variant='outlined'
        startIcon={<Icon> delete </Icon>}
      >
        Apagar
      </Button>
      <Button
        color='primary'
        disableElevation
        variant='outlined'
        startIcon={<Icon> add </Icon>}
      >
        Novo
      </Button>

      <Divider variant='middle' orientation='vertical' />

      <Button
        color='primary'
        disableElevation
        variant='outlined'
        startIcon={<Icon> arrow_back </Icon>}
      >
        Voltar
      </Button>
    </Box>
  );
};
