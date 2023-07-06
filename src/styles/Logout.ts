import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: theme.palette.background.default,
    },
    logoutButton: {
      marginTop: theme.spacing(2),
    },
  }),
);

export default useStyles;