import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingCard = () => {
    return (
        <Paper className="profile loading" elevation={1}>
            <CircularProgress  data-testid="loading-spinner"/>
        </Paper>
    );
};

export default LoadingCard;
