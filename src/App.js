import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { CircularProgress, Typography } from '@material-ui/core';
import { Cover } from './components/Cover';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { appTheme } from './themes/appTheme';
import './App.css';


function App() {
  // Fetch state from Redux store
  const dataIsLoaded = useSelector(state => state.dataIsLoaded);
  const coverImage = useSelector(state => state.coverImage);
  const asteroidsData = useSelector(state => state.asteroidsData);
  const error = useSelector(state => state.error);

  return (
    <ThemeProvider theme={appTheme}>
      {
        !dataIsLoaded && 
        <div className="centered">
          <CircularProgress />
        </div>
      }
      {
        dataIsLoaded && error &&
        <div className="centered">
          <Typography variant="h2" color="primary">
            An error occurred.
          </Typography>
          <Typography variant="body1" color="textPrimary">
            {error}
          </Typography>
        </div>
      }
      {
        dataIsLoaded && !error &&
        <div className="app" style={{backgroundImage: `url(${coverImage})`}}>
          <Cover 
            coverImage={coverImage} 
            numAsteroids={asteroidsData.element_count} 
          />
          <Content 
            asteroidsData={asteroidsData}
          />
          <Footer />
        </div>
      }
    </ThemeProvider>
  );
}

export { App };