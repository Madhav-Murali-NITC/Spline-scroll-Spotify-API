import React, { useEffect,useState } from 'react';
import axios from 'axios'

const Spotify = () => {

  const clientId = 'dcfe13ce2bda4f9ba0383ba7ceca9621'
  const secret = 'd8b632547ecb46c0ab0752154faf7e07'

  const [token,setToken] = useState('')
  const [playlistId,setPlaylist] = useState('1HLHWqXZ09Mdu6QO3rlCux')
  const [player, setPlayer] = useState(null);

  const formData = new URLSearchParams();
  formData.append('grant_type', 'client_credentials');
  formData.append('client_id', clientId);
  formData.append('client_secret', secret);
  formData.append('scope', 'streaming user-read-playback-state');


  useEffect(() => {
    const fetchData = async  () => {
    try{
    const res = await axios.post('https://accounts.spotify.com/api/token',
    formData,
    {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded'
      }
    }).then((res) => {
      console.log(res.data)
      setToken(res.data.access_token)
    })
      
  } catch (error) {
    console.log(error)
  }
    }
    fetchData()
  },[])



  useEffect(() => {

    const fetchData = async () => {
      try{
        const res = await axios.get('https://api.spotify.com/v1/playlists/1HLHWqXZ09Mdu6QO3rlCux',
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then((res) => {
          console.log(res.data.name)
          setPlaylist(res.data.id)
        })
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()


  },[token])

  console.log(playlistId)

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://open.spotify.com/embed/iframe-api/v1';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const element = document.getElementById('embed-iframe');
      const uri = `spotify:playlist:${playlistId}`;
      const options = {
        width: '0%',
        height: '160',
        uri: uri
        
      };

      const callback = (EmbedController) => {
       
        document.querySelectorAll('.episode').forEach(episode => {
          episode.addEventListener('click', () => {
            EmbedController.loadUri(episode.dataset.spotifyId);
          });
        });


        const toggleButton = document.querySelector('.toggle');
        if (toggleButton) {
          toggleButton.addEventListener('click', () => {
            EmbedController.togglePlay();
          });
        }
       

      };

      window.onSpotifyIframeApiReady = (IFrameAPI) => {
        IFrameAPI.createController(element, options, callback);
      };
    };

    return () => {
      document.body.removeChild(script);
      delete window.onSpotifyIframeApiReady;
    };
  }, []);




  return (
    <React.Fragment>
      <button className = 'toggle'>toggle</button>
     
      <div id="embed-iframe"></div>
    </React.Fragment>
  );
}


  
export default Spotify;