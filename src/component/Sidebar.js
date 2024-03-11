import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="boxy">
        <div className="box1">
          <h1>
            <i class="ri-netease-cloud-music-line"></i>LyricsLoom
          </h1>

          <ul>
            <li>
              <i class="ri-home-fill"></i>
              <Link to="/">Home</Link>
            </li>
            <li style={{color:'gray'}}>
              <i class="ri-search-line"></i>
              <Link to="Category" className="special" >Category</Link>
            </li>
          
          </ul>
        </div>
        <div className="box2">
            <div className="rowsflex" >
              <div><h1><i class="ri-slideshow-view"></i>Your Library</h1></div>
                <div><i class="ri-add-line"></i></div>
            </div>
            <div className="semibox">
                <h2>Create Your First Playlist</h2>
                <p>it's easy,we'll help you</p>
                <button>Create Playlist</button>
            </div>
            <div className="cardssong">
                <Link to="Song" className="demo">
                <div id="row">
                 <div>
                 <img src="https://i.pinimg.com/564x/23/f1/e2/23f1e2f224f12a62ea63708a7995b808.jpg" alt="" />
                 </div>
                  <div className="textarea">
                    <h3>Trending Now India</h3>
                    <p>Playlist Spotify</p>
                  </div>
                </div>
                </Link>
               
            </div>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
