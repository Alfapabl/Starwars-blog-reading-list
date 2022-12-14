import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.infoCharacter(params.theid);
  }, []);


  const img =
  `https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`

  return (
    <>
      <div className="jumbotron">
        <div className="card mb-3" styles="max-width: 540px;">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={img} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{store.info.properties?.name}</h5>
                <p className="card-text">
                {store.info.description}
                  
                </p>
              </div>
            </div>
          </div>
          <div className="card-footer">
		  <div className="d-flex mt-5 overflow-auto" styles={{paddingTop: '50px'}}>
			
			
			<div className="col-2 h-50"> Name: {store.info.properties?.name}  </div>
			<div className="col-2 h-50"> Birth Year: {store.info.properties?.birth_year}  </div>
			<div className="col-2 h-50"> Hair Color: {store.info.properties?.hair_color}  </div>
			<div className="col-2 h-50"> Eye Color: {store.info.properties?.eye_color}  </div>
			<div className="col-2 h-50"> Height: {store.info.properties?.height}  </div>
			<div className="col-2 h-50"> Mass: {store.info.properties?.mass}  </div>
			
		

		</div>

		  </div>
        </div>

        <Link to="/">
          <span className="btn btn-primary btn-lg" href="#" role="button">
            Back home
          </span>
        </Link>
      </div>
    </>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
