import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"


class Profile extends Component {
    render() {
        return (
            <div>
                <h1>Profile</h1>
                {/* <h2>{user.username}</h2> */}
            </div>
        );
    }
}


// passing props of data from the store to this component
const mapStateToProps = (state) => ({
    
  })
  
  
  const mapDispatchToProps = (dispatch) => ({
    
    
  })
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
  


// export default Profile;