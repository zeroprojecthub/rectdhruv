import './Home.css';
function Home(){
    // document.title("LyricsLoom | Home");
    return(
        <>
            <div className="mainboxs">
                <div className="boxypart">
                <div className="headerpart1">
                    <div className='icons'>
                    <i class="ri-arrow-left-s-line"></i>
                    <i class="ri-arrow-right-s-line"></i>
                    </div>
                    <div className='buttons'>
                        <a href="#" className='sign'>Sign up</a>
                        <button className='loginbtn'>Log in</button>
                    </div>
                </div>

                <div className="songlist">
                    <div className="rowflexy">
                        <h1>Spotify Playlists</h1>
                        <p>Show All</p>
                    </div>
                    <div className="cartboxflexy">
                            <div className="boxs">
                                <img src="https://i.pinimg.com/564x/23/f1/e2/23f1e2f224f12a62ea63708a7995b808.jpg" alt="" />
                                <h1>Lofi Beats</h1>
                                <p>Lorem ipsum dolor sit amet.it amet.</p>
                            </div>
                            <div className="boxs">
                                <img src="https://i.pinimg.com/564x/cf/3a/d8/cf3ad88626d15405701c2f3d2d8fa995.jpg" alt="" />
                                <h1>Lofi Beats</h1>
                                <p>Lorem ipsum dolor sit amet.it amet.</p>
                            </div>
                            <div className="boxs">
                                <img src="https://i.pinimg.com/564x/96/6f/61/966f61668e47fc9f458106bf1ddc7833.jpg" alt="" />
                                <h1>Lofi Beats</h1>
                                <p>Lorem ipsum dolor sit amet.it amet.</p>
                            </div>
                            <div className="boxs">
                                <img src="https://i.pinimg.com/564x/88/52/10/88521061daad28535b7910e52c950cfb.jpg" alt="" />
                                <h1>Lofi Beats</h1>
                                <p>Lorem ipsum dolor sit amet.it amet.</p>
                            </div>
                            <div className="boxs">
                                <img src="https://i.pinimg.com/564x/b5/14/58/b514586a1c0ddffe914e66002207d1b2.jpg" alt="" />
                                <h1>Lofi Beats</h1>
                                <p>Lorem ipsum dolor sit amet.it amet.</p>
                            </div>
                            <div className="boxs">
                                <img src="https://i.pinimg.com/564x/6a/f2/0f/6af20ff1e30c0c9c504787adece410c2.jpg" alt="" />
                                <h1>Lofi Beats</h1>
                                <p>Lorem ipsum dolor sit amet.it amet.</p>
                            </div>
                            <div className="boxs">
                                <img src="https://i.pinimg.com/564x/4c/91/a3/4c91a39cf8b6bdc8096b7348e8d066b8.jpg" alt="" />
                                <h1>Lofi Beats</h1>
                                <p>Lorem ipsum dolor sit amet.it amet.</p>
                            </div>
                            <div className="boxs">
                                <img src="https://i.pinimg.com/564x/56/2b/cc/562bccb79d566292f84d52e38482f2b9.jpg" alt="" />
                                <h1>Lofi Beats</h1>
                                <p>Lorem ipsum dolor sit amet.it amet.</p>
                            </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default Home;