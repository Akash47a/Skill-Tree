import React, { useState, useEffect } from "react";
import "./Home.css";
function Home({setName}) {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/roadmaps")
      .then((data) => data.json())
      .then((data) => setDatas(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {datas.length > 0 ? (
        <div>
          <div className="home-title"><h4>RoadMaps</h4></div>
          <div className="home-container">
            {datas.map((data) => (
              <div className="courcebox" key={data.id} onClick={()=>setName(data.slug)}>
                <h4 >{data.title}</h4>
                <p className="text-truncate">{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default Home;
