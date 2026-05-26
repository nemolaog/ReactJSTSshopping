import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

/**
 * Layout component
 * Provides shared page structure such as Header and main content area.
 */
function Layout() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />

            {/* Child route content will be rendered here */}
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;





