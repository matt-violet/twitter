export async function fetchHomeTimeline() {
  const timeline = await fetch('/timeline');
  const timelineJSON = await timeline.json();
  return timelineJSON;
}

export async function fetchUserTimeline(username) {
  const userTimeline = await fetch(`/timeline/${username}`);
  const userTimelineJSON = await userTimeline.json();
  return userTimelineJSON;
}

export async function fetchUser(username) {
  const userObj = await fetch(`/users/${username}`);
  const userObjJSON = await userObj.json();
  return userObjJSON;
}
