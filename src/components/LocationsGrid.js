import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";
import LocationCard from "./LocationCard.js";
import Grid from "@material-ui/core/Grid";

import { List, AutoSizer } from "react-virtualized";

const CARD_WIDTH = 340;

const styles = theme => ({
  root: {
    padding: "20px 85px",
    marginTop: 20,
    justifyContent: "flex-start"
  },
  Row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "0 0.5rem",
    boxSizing: "border-box",
    marginBottom: "20px"
  },
  Item: {
    width: "340px",
    height: "305px",
    display: "inline-flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "15px 10px",

   
  },
  // parentList:{
  //   marginTop:"10px"
  // }
});

class LocationsGrid extends React.Component {
  render() {
    const { locations, classes } = this.props;

    return (


        <div style={{ marginTop:"10px", height: "80vh" }}>
       <AutoSizer>
          {({ height, width }) => {
            const itemsPerRow = Math.floor(width / CARD_WIDTH) || 1;
            const rowCount = Math.ceil(locations.length / itemsPerRow);


            return (
              <div>
              
                <List
                  width={width}
                  height={height}

                  rowCount={rowCount}
                  rowHeight={CARD_WIDTH}
                  rowRenderer={({ index, key, style }) => {
                    const items = [];

                    const fromIndex = index * itemsPerRow;

                    const toIndex = Math.min(
                      fromIndex + itemsPerRow,
                      locations.length
                    );

                    for (let i = fromIndex; i < toIndex; i++) {
                      let location = locations[i];
                      items.push(
                        <div className={classes.Item} key={i}>
                          <LocationCard location={location} />
                        </div>
                      );
                    }

                    return (
                      <div className={classes.Row} key={key} style={style}>
                        {items}
                      </div>
                    );
                  }}
                />
              </div>
            );
          }}
        </AutoSizer>
        </div>
    );
  }
}

LocationsGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LocationsGrid);