import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { ThemeProvider } from '../store/theme-context';
// import Loading from './Loading';

const AppLayout = () => {
  const { pathname } = useLocation();

  // const navigation = useNavigation();
  // const isLoading = navigation.state === 'loading';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {/* {isLoading && <Loading />} */}

          <Outlet />
        </main>
        <footer className="sticky bottom-0 z-50 border-t border-border-light bg-bg/95 backdrop-blur py-4">
          <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-xs text-text-tertiary">
            <span className="mx-auto">&copy; 2026 Kaesar Albert</span>
            {/* <NowPlaying /> */}
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default AppLayout;
