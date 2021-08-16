import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

const ProfileCard = ({ data }) => {
    const { name, image, company, employeeId } = data;
    const { src, alt } = image;

    return (
        <Paper className="profile" elevation={1}>
            <header> {company} </header>
            <main>
                <Avatar className="avatar" src={src} alt={alt} />
                <section className="details">
                    <h1>{name}</h1>
                    <h2>{employeeId}</h2>
                </section>
            </main>
        </Paper>
    );
};

export default ProfileCard;
