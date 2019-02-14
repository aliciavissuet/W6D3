const APIUtil = require('./api_util')
class FollowToggle {
  constructor(el){
    this.$el = $(el);
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data('initial-follow');
    this.render();
    this.handleClick();
    
  }

  render() {
    this.$el.removeProp('disabled');
    this.$el.text((this.followState==='followed') ? 'Unfollow!' : 'Follow!');
  }

  handleClick() {
      this.$el.on('click', e => {
      e.preventDefault();
      this.$el.prop('disabled');
      if (this.followState === 'unfollowed') {
        return APIUtil.followUser(this.userId).then(() => {
          this.followState = 'followed';
          this.render();
        });
      } else {
        return APIUtil.unfollowUser(this.userId).then(() => {
          this.followState = 'unfollowed';
          this.render();
        });
      }
    })
    
  }



}
module.exports = FollowToggle;