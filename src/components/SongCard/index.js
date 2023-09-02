import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const SongCard = props => {
  const {trackDetails, getTrackId} = props
  const {id, imageUrl, name, genre, duration} = trackDetails

  const deleteTrack = () => getTrackId(id)
  return (
    <li className="track-item">
      <img src={imageUrl} className="track-image" alt="track" />
      <div className="track-details-section">
        <div className="track-details">
          <p className="track-name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
        <div className="delete-icon-container">
          <p className="duration">{duration}</p>
          <button
            data-testid="delete"
            onClick={deleteTrack}
            className="delete-btn"
            type="button"
          >
            <AiOutlineDelete fontSize={20} color="#ffffff" />
          </button>
        </div>
      </div>
    </li>
  )
}

export default SongCard
