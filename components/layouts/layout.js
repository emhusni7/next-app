import NavBar from "./appbar";

const Layout = ({children}) =>
{
    return (
    <>
        <NavBar />
            <main>
                {children}
            </main>
    </>);
}

export default Layout;