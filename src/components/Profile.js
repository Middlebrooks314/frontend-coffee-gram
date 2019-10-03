import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardDeck, Button } from "react-bootstrap";
import { getUserProfileData, deleteUserFetch } from "../reducers/user-reducer";
import RecipeCard from "./RecipeCard";

class Profile extends React.Component {
  componentDidMount() {
    this.props.fetchUserProfile(this.props.match.params.id);
  }

  handleDelete = () => {
    console.log("clicked", this.props.currentUser.id);
    let confirmDelete = window.confirm(
      "Are you sure you want to delete your account?"
    );
    if (confirmDelete === true) {
      this.props.deleteUser(this.props.currentUser.id, this.props.history);
    } else {
      console.log("you're profile is still there");
    }
  };
  render() {
    const userRecipes = this.props.selectedUser.recipes || [];
    const isLoaded = !!this.props.currentUser.id;
    // console.log(userRecipes);
    return isLoaded ? (
      <div className="">
        <div className="">
          <div className="overlay bg-dark position-absolute" />
          <h1 className="display-5 position-relative text-black">
            {this.props.selectedUser.username}
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
                  src={this.props.selectedUser.image}
                  waves
                />
              </Card>
            </div>
            <div className="col-sm-12 col-lg-5">
              <h5 className="mb-2">About: </h5>
              {this.props.selectedUser.about ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: this.props.selectedUser.about
                  }}
                />
              ) : (
                "Coffee Enthusiast"
              )}
            </div>
            <div className="col-sm-12 col-lg-3">
              {this.props.selectedUser.id === this.props.currentUser.id && (
                <Link to="/new" className="btn btn-link">
                  Add New Recipe
                </Link>
              )}
              {this.props.selectedUser.id === this.props.currentUser.id && (
                <Button onClick={this.handleDelete}>Delete Account</Button>
              )}
            </div>
          </div>
        </div>
        <CardDeck>
          {userRecipes.map(recipe => {
            return (
              <RecipeCard id={recipe.id} key={recipe.id} recipe={recipe} />
            );
          })}
        </CardDeck>
      </div>
    ) : (
      <div>loading.............</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes.allRecipes,
    currentUser: state.user.currentUser,
    selectedUser: state.user.selectedUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUserProfile: id => {
    dispatch(getUserProfileData(id));
  },
  deleteUser: (id, history) => {
    dispatch(deleteUserFetch(id, history));
  }
});

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
