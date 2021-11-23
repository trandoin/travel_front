import { Typography } from "@mui/material";
import React from "react";
import "./hover.css";
import Rating from "@mui/material/Rating";

export default function Example(props) {
  return (
    <div className="container">
      <div
        className="content"
        style={{ marginTop: "100px", borderRadius: "5vh", height: "45vh" }}
      >
        <a href={props.url} target="blank">
          <div className="content-overlay" />
          <img
            className="content-image"
            alt="content"
            src={props.url}
            height="40vh"
            width="500px"
            style={{ height: "45vh", width: "35vw" }}
          />
          <div className="content-details fadeIn-bottom">
            <div
              style={{
                position: "relative",
                top: "140px",
                left: "0px",
                fontSize: "24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-end",
                color: "white",
              }}
            >
              <Typography style={{fontSize:'30px', fontWeight: "700" }}>
                Some Place
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography>4.5</Typography>
                <Rating
                  name="half-rating-read"
                  defaultValue={4.5}
                  precision={0.5}
                  readOnly
                />
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
