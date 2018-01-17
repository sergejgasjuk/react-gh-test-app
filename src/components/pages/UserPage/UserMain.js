import React, { Component } from 'react';
import {NavLink, Route} from 'react-router-dom';

class UserMain extends Component {
  constructor(props) {
    super(props);
  }
  
  renderStats(stat) {
    return (
      <div key={stat.name} className={'gh-user-stat col'}>
        <NavLink to={stat.url}
                className={'text-primary'}>
          <span className={'name'}>{stat.name}: &nbsp;</span>
          <span className={'value'}>{stat.value}</span>
        </NavLink>
      </div>
    );
  }
  
  render() {
    const {user, userLogin} = this.props;
    
    if (!user) {
      return (<h4>Loading data for {userLogin} ..</h4>);
    }
  
    const userStats = [
      {
        name: 'Public Repos',
        value: user.public_repos,
        url: `/user/${userLogin}/repos`,
        path: 'repos',
        componentProp: () => { return (<div>Repos</div>)}
      },
      {
        name: 'Followers',
        value: user.followers,
        url: `/user/${userLogin}/followers`,
        path: 'followers',
        componentProp: () => { return (<div>Followers</div>)}
      },
      {
        name: 'Following',
        value: user.following,
        url: `/user/${userLogin}/following`,
        path: 'following',
        componentProp: () => { return (<div>Following</div>)}
      }
    ];
    
    return (
      <div className={'user-main'}>
        <div className={'gh-user'}>
          <div className={'gh-user-avatar'}>
            <img src={user.avatar_url} alt={`${userLogin} avatar`}/>
          </div>
          
          <div className={'gh-user-info'}>
            <div className={'gh-user-name'}>
              <h3 className={'name'}>
                {user.login}
                <small>({user.name})</small>
              </h3>
              
              <a className={'gh-link'}
                 href={user.html_url}
                 target={'_blank'}>github profile</a>
            </div>
            
            <div className={'gh-user-stats row'}>
              {userStats.map(this.renderStats)}
            </div>
          </div>
        </div>
        
        <div className={'user-body'}>
          {userStats.map((stat, index) => {
            return <Route
                          key={index}
                          path={`/user/${userLogin}/${stat.path}`}
                          component={stat.componentProp} />
          })}
        </div>
      </div>
    );
  }
}

export default UserMain;
