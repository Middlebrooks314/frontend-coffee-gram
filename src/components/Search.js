import React, { Component } from "react";
import { MDBCol, MDBIcon } from "mdbreact";

class Search extends Component {
  render() {
    return (
      <MDBCol md="6">
        <form className="form-inline mt-4 mb-4">
          <MDBIcon icon="search" />
          <input
            className="form-control form-control-sm ml-3 w-75"
            type="text"
            placeholder="Search Coffee Recipes"
            aria-label="Search"
          />
        </form>
      </MDBCol>
    );
  }
}

export default Search;
