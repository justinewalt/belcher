class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="profile-div twelve columns">
        <hr />
        <h3 className="text-center">Profile</h3>
        <div>
          <button className="text-center black four columns offset-by-four">Preferences</button>
        </div>
      </div>
    );
  }
}