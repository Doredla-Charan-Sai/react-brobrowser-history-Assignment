import {Component} from 'react'
import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {searchItem: '', historyList: initialHistoryList}

  onType = event => {
    this.setState({searchItem: event.target.value})
  }

  onDelete = uniqueId => {
    const {historyList} = this.state
    this.setState({
      historyList: historyList.filter(item => !(item.id === uniqueId)),
    })
  }

  render() {
    const {searchItem, historyList} = this.state
    const serachResult = historyList.filter(item =>
      item.title.toLowerCase().includes(searchItem.toLowerCase()),
    )
    console.log(serachResult.length)

    return (
      <div className="bg-cont">
        <div className="upper-cont">
          <img
            className="history-img"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-img">
            <img
              className="search"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
          </div>
          <div className="search-cont">
            <input
              type="search"
              className="search-txt"
              placeholder="search"
              value={searchItem}
              onChange={this.onType}
            />
          </div>
        </div>
        <div className="lower-cont">
          <ul className="content-cont">
            {serachResult.map(eachItem => (
              <li className="hist-list-item" key={eachItem.id}>
                <p className="time-accessed">{eachItem.timeAccessed}</p>
                <div className="whole-cont">
                  <div className="app-tit">
                    <img
                      className="app-logo"
                      src={eachItem.logoUrl}
                      alt="domain logo"
                    />
                    <p className=" title">{eachItem.title}</p>
                    <p className=" domain-url">{eachItem.domainUrl}</p>
                  </div>
                  <div className="delete-cont">
                    <button
                      data-testid="delete"
                      type="button"
                      onClick={() => this.onDelete(eachItem.id)}
                    >
                      <img
                        className="delete"
                        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                        alt="delete"
                      />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {((!serachResult.length !== 0 && searchItem !== '') ||
            historyList.length === 0) && (
            <p className="else-para">There is no history to show</p>
          )}
        </div>
      </div>
    )
  }
}

export default App
