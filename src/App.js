import React from "react";
import NoteHeader from "./components/NoteHeader";
import NoteBody from "./components/NoteBody";
import { LocaleProvider } from './contexts/LocaleContext';
import { getUserLogged, putAccessToken } from './utils/api';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
      localeContext: {
        locale: localStorage.getItem('locale') || 'id',
        toggleLocale: () => {
          this.setState((prevState) => {
            const newLocale = prevState.localeContext.locale === 'id' ? 'en' : 'id';
            localStorage.setItem('locale', newLocale);
            return {
              localeContext: {
                ...prevState.localeContext,
                locale: newLocale
              }
            }
          });
        }
      }
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async componentDidMount() {
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
        initializing: false
      };
    });
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null
      }
    });

    putAccessToken('');
  }
  
  render() {
    if (this.state.initializing) {
      return null;
    }

    if (this.state.authedUser === null) {
      return (
      <LocaleProvider value={this.state.localeContext}>
        <div className="app-container">
          <NoteHeader authedUser={this.state.authedUser}/>
          <NoteBody authedUser={this.state.authedUser} loginSuccess={this.onLoginSuccess}/>

        </div>
      </LocaleProvider>
      )
    }
    
    return (
      <LocaleProvider value={this.state.localeContext}>
        <div className="app-container">
          <NoteHeader authedUser={this.state.authedUser} logout={this.onLogout} />
          <NoteBody authedUser={this.state.authedUser} loginSuccess={this.onLoginSuccess}/>

        </div>
      </LocaleProvider>
    );
  }
}

export default App;
