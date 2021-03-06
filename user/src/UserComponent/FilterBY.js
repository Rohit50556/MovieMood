import React from "react";
import "../css/FilterBY.css";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const FilterBY = () => {
  return (
    <div className="filterby_1">
      <div className="div__language" style={{ display: "inline-block" }}>
        <h3>Filters</h3>
        <FormControl component="fieldset">
          <FormLabel className="formlabel__lan" component="legend">
            By Language
          </FormLabel>
          <FormGroup
            className="forformgrp formcontrollabel"
            aria-label="position"
            column
          >
            <FormControlLabel
              value="end"
              control={<Checkbox color="secondary" />}
              label="hindi"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="secondary" />}
              label="english"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="secondary" />}
              label="tamil"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="secondary" />}
              label="telugu"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="secondary" />}
              label="gujarati"
              labelPlacement="end"
            />
          </FormGroup>
        </FormControl>
      </div>
      <div className="div__language" style={{ display: "inline-block" }}>
        <FormControl component="fieldset">
          <FormLabel className="formlabel__lan" component="legend">
            By Geners
          </FormLabel>
          <FormGroup className="formcontrollabel" aria-label="position" column>
            <FormControlLabel
              value="end"
              control={<Checkbox color="secondary" />}
              label="Comedy"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="secondary" />}
              label="Crime"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="secondary" />}
              label="Drama"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="secondary" />}
              label="Romance"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="secondary" />}
              label="Historical"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="secondary" />}
              label="Mystery"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="secondary" />}
              label="Social"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="secondary" />}
              label="Saga"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="secondary" />}
              label="Urban"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="secondary" />}
              label="Western"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="secondary" />}
              label="Animation"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="secondary" />}
              label="Thriller"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="secondary" />}
              label="Horror"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="secondary" />}
              label="Fantasy"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="secondary" />}
              label="Adventure"
              labelPlacement="end"
            />{" "}
          </FormGroup>
        </FormControl>
      </div>
    </div>
  );
};
export default FilterBY;
