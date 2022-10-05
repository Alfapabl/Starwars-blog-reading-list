import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanets = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.infoPlanets(params.theid);
  }, []);

  console.log(store.info)

  const img =
  `https://starwars-visualguide.com/assets/img/planets/${params.theid}.jpg`;

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
			
			
			<div className="col-2 h-50"> Population: {store.info.properties?.population}  </div>
			<div className="col-2 h-50"> Climate: {store.info.properties?.climate}  </div>
			<div className="col-2 h-50"> Rotation period: {store.info.properties?.rotation_period}  </div>
			<div className="col-2 h-50"> Orbital Period: {store.info.properties?.orbital_period}  </div>
			<div className="col-2 h-50"> Gravity: {store.info.properties?.gravity}  </div>
			<div className="col-2 h-50"> Terrain: {store.info.properties?.terrain}  </div>
			
		

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

SinglePlanets.propTypes = {
  match: PropTypes.object,
};
