import React, { Component } from "react";
import PlacesAutocomplete from 'react-places-autocomplete'
import { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete'

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

function handleClick() {
  alert("onClick triggered on the title component");
}

const styles = {
  title: {
    cursor: "pointer"
  }
};


class App extends Component {
  render() {
    return (
      <div></div>
  
    );
  }
}

export default App;
