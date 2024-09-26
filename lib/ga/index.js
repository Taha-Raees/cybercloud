// lib/ga/index.js
import ReactGA from 'react-ga'

export const initGA = () => {
  ReactGA.initialize('G-W3DNTLG0Y3') // Replace with your Measurement ID
}

// Log the initial page view
export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  };
  
  // Log specific events
  export const logEvent = ({ category, action, label, value }) => {
    ReactGA.event({
      category,
      action,
      label,
      value,
    });
  };