import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

function Profile() {
  return (
    <div>
      <TwitterTimelineEmbed
          sourceType="profile"
          screenName="ayedoemateo"
        />
    </div>
  )
}

export default Profile
