import { useLocation } from 'react-router-dom';

interface AnimatedPageProps {
  children: React.ReactNode;
}

const AnimatedPage = ({ children }: AnimatedPageProps) => {
  const location = useLocation();

  return (
    <div 
      key={location.pathname}
      className="page-transition"
    >
      {children}
    </div>
  );
};

export default AnimatedPage;

