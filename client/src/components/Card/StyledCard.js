import React from 'react';
import './StyledCard.css';
function StyledCard(props) {
  return (
    <div className='sample_container card_sample'>
      <div className='e-card e-custom-card'>
        <div className='e-card-header'>
          <div className='e-card-header-caption center'>
            <div className='e-card-header-title name'>
              <div style={{ overflowWrap: 'break-word' }}>{props.name}</div>
            </div>
          </div>
        </div>
        <div className='e-card-content'>
          <p className='avatar-content'> {props.content}</p>
        </div>
      </div>
    </div>
  );
}

export default StyledCard;
