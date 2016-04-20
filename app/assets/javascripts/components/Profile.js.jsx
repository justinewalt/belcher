class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="profile-div twelve columns">
        <h3 className="text-center profile-title">Profile</h3>
        <div>
          <button className="preferences-button four columns offset-by-four">Preferences</button>
        </div>
      </div>
    );
  }
}