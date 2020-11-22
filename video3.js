import React from "react";
import { Row } from "react-bootstrap";
import data from "../data/cancion3.json";

export default class video extends React.Component {
  state = {
    data: data
  };
  render() {
    return (
      <div
        className="mt-1 d-flex justify-content-center"
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Row
          className=" d-flex justify-content-center"
          style={{ height: "60px", width: "100%", margin: "0" }}
        >
          <div style={{ width: "35%" }}>
            <div className="d-flex align-items-end justify-content-end ">
              <div
                style={{
                  zIndex: "2",
                  color: "white",
                  background: "black",
                  padding: "0 5px",
                  borderRadius: "2px",
                  opacity: "0.6",
                  fontSize: "8px",
                  margin: "2px"
                }}
              ></div>
            </div>
          </div>
          <div style={{ width: "250px" }}>
            <div
              style={{
                background: "#181818",
                width: "325px",
                height: "90px",
                padding: "5px"
              }}
            >
              {this.state.data.map((dato) => (
                <div>
                  <h1
                    className="mb-1"
                    style={{ color: "white", fontSize: "14px" }}
                  >
                    {dato.nombre_cancion}
                  </h1>
                  <h4 style={{ color: "#7d7d7d", fontSize: "10px" }}>
                    {dato.nombre_autor}
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-music-note"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
                      <path fillRule="evenodd" d="M9 3v10H8V3h1z" />
                      <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z" />
                    </svg>
                    {dato.info_cancion}
                  </h4>
                  <p
                    style={{ color: "#7d7d7d", fontSize: "10px", margin: "0" }}
                  >
                    {dato.descripcion_cancion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Row>
      </div>
    );
  }
}
