const FollowToggle = require('./follow_toggle');

$(() => {
  $('.follow-toggle').each((i, el) => {
    this[i] = new FollowToggle(el);
  })
})