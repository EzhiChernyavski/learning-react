import React from 'react';
import profile from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiemy2DQoGfE_W5JET6dmj0nxUQLVaoAdDeA&usqp=CAU"
        className={profile.content_img}/>
      <div className={profile.content__section_info}>
        <div>
          ava + description
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;