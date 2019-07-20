import React from 'react';
import { connect } from 'react-redux'

const Smurfs = (props) => {
  return (
    <div >
      { props.smurfs.map((smurf, index) => {return (<div>
                                            <h3>{smurf.name}</h3> 
                                             <p>{smurf.age} </p> 
                                             <strong>{smurf.height}</strong>
                                             </div>);
                                    } )
       }
    </div>
  );
};


const mapStateToProps = (state) => {
    return {
        smurfs : state.smurfs,
      isLoading: state.isLoading,
    }
  }

export default connect(mapStateToProps)(Smurfs);