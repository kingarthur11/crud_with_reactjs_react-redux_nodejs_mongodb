import './App.css';
import {store} from './actions/store'
import PostMessage from './component/PostMessage';
import {Provider} from 'react-redux'
import {Container, AppBar, Typography} from '@material-ui/core'

function App() {
  return (
    <Provider store={store}>
      <Container>
        <AppBar position='static' color='inherit'>
          <Typography
          variant="h2"
          align="center">
            CRUD PROJECT
          </Typography>
        </AppBar>
        <PostMessage />
      </Container>
    </Provider>
  );
}

export default App;
