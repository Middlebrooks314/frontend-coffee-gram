import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

class Profile extends React.Component {
  render() {
    console.log("in Profile", this.props);
    const isLoaded = !!this.props.currentUser;
    return isLoaded ? (
      <div className="">
        <div className="">
          <div className="overlay bg-dark position-absolute" />
          <h1 className="display-5 position-relative text-black">
            {this.props.currentUser.username}
          </h1>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <Card style={{ width: "250px" }}>
                <Card.Img
                  style={{ height: "250px" }}
                  className="img-fluid"
                  variant="top"
                  src={this.props.currentUser.image}
                  waves
                />
              </Card>
            </div>
            <div className="col-sm-12 col-lg-5">
              <h5 className="mb-2">About: </h5>
              {this.props.currentUser.about ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: this.props.currentUser.about
                  }}
                />
              ) : (
                "Coffee Enthusiast"
              )}
            </div>
            <div className="col-sm-12 col-lg-3">
            <Link to="/new" className="btn btn-link">
            Add New Recipe
          </Link>
            </div>
          </div>
          <Link to="/" className="btn btn-link">
            Back to recipes
          </Link>
        </div>
      </div>
    ) : (
      <div>loading.............</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    recipes: state.recipes.allRecipes
  };
};

const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Profile)
);

// export default Profile;
// component did mount id from params
// fetch to create route /users/recipes/id
//fetch the route / may need bear token
