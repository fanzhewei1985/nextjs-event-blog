import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";


const MainLayout = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default MainLayout;