import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingCard = () => {
    return (
        <Paper className="profile loading" elevation={1}>
            <CircularProgress />
        </Paper>
    );
};

export default LoadingCard;
