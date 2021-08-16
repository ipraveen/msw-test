import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Alert from '@material-ui/lab/Alert';
import alertIcon from '../images/alert-icon.png';

const ErrorCard = ({ error }) => {
    return (
        <Paper className="profile" elevation={1}>
            <Alert> {error.message} </Alert>
            <main>
                <Avatar className="avatar" src={alertIcon} alt={'alert'} />
                <section className="details">
                    <h1>- -</h1>
                    <h2>- -</h2>
                </section>
            </main>
        </Paper>
    );
};

export default ErrorCard;
