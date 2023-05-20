import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material';

interface IListToolBarsProps {
  searchValue?: string;
  showSearch?: boolean;
  toChangeSearchValue?: (newSearch: string) => void;
  searchNewBtn?: string;
  showSearchNewBtn?: boolean;
  toClickNewBtn?: () => void;
}

export const ListToolBars = ({
  searchValue = '',
  showSearch = false,
  toChangeSearchValue,
  searchNewBtn = 'Novo',
  showSearchNewBtn = true,
  toClickNewBtn,
}: IListToolBarsProps) => {
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
      {showSearch && (
        <TextField
          size='small'
          placeholder='Search...'
          value={searchValue}
          onChange={(e) => toChangeSearchValue?.(e.target.value)}
        />
      )}

      <Box flex={1} display='flex' justifyContent='end'>
        {showSearchNewBtn && (
          <Button
            color='primary'
            disableElevation
            variant='contained'
            endIcon={<Icon> add </Icon>}
            onClick={toClickNewBtn}
          >
            {searchNewBtn}
          </Button>
        )}
      </Box>
    </Box>
  );
};
