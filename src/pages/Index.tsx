// This page is no longer used - routing now goes directly to Home component
import { Navigate } from 'react-router-dom';

const Index = () => {
  return <Navigate to="/" replace />;
};

export default Index;
