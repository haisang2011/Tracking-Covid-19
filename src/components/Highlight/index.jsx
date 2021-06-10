import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";

function index(props) {
  return (
    <Grid container spacing={3}>
      <Grid item sm={4} xs={12}>
        <Card>
          <CardContent>
            <Typography component="p" variant="body2">
              so ca nhiem
            </Typography>
            <Typography component="span" variant="body2">
              6666
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm={4} xs={12}>
        <Card>
          <CardContent>
            <Typography component="p" variant="body2">
              so ca khoi
            </Typography>
            <Typography component="span" variant="body2">
              6666
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm={4} xs={12}>
        <Card>
          <CardContent>
            <Typography component="p" variant="body2">
              so ca mac
            </Typography>
            <Typography component="span" variant="body2">
              6666
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

index.propTypes = {};

export default index;
