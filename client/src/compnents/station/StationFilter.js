import {createStyles, IconButton, InputAdornment, InputBase, makeStyles} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import React, {useState} from "react";

const useStyles = makeStyles(() =>
    createStyles({
        adornedEnd: {
            margin: 0
        }
    }),
);

function StationFilter(props) {

    const [filterValue, setFilterValue] = useState("");

    const classes = useStyles();

    const onSubmit = function (event) {
        event.preventDefault();
        props.updateFilter(filterValue);
    }
    const clearSearch = function () {
        setFilterValue("");
        props.updateFilter("");
    }

    return (
        <form onSubmit={(event) => {
            onSubmit(event);
        }}>
            <InputBase
                id="searchInput"
                name="searchInput"
                placeholder="Finn sykkel..."
                inputProps={{'aria-label': 'search'}}
                value={filterValue}
                onChange={(e) => {
                    setFilterValue(e.target.value);
                }}
                endAdornment={
                    <>
                        <InputAdornment position={"start"} className={classes.adornedEnd}>
                            <IconButton type="submit" size={"small"}>
                                <SearchIcon/>
                            </IconButton>
                        </InputAdornment>
                        <InputAdornment position={"start"} className={classes.adornedEnd}>
                            <IconButton size={"small"} onClick={() => {
                                clearSearch();
                            }}>
                                <ClearIcon/> Nullstill søk
                            </IconButton>
                        </InputAdornment>
                    </>
                }
            />
        </form>
    )
}

export default StationFilter;