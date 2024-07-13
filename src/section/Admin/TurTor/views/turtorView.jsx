import React from 'react';
import TurtorList from '../turtorList.jsx';

function TurtorView(){
    return(
        <div className="min-w-[250px]">
        <div className="bg-[#fff] p-5 rounded-t-xl">
          <p className="text-2xl text-black font-bold">Turtor List</p>
        </div>
        <div className="p-5" data-testid="classTable">
          <TurtorList />
        </div>
      </div>
    )
}

export default TurtorView;