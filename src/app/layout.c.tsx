import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";

interface ChildrenProps {
    children: React.ReactNode;
}

const layout = ({children}: ChildrenProps) => {
    return (
        <div className="layout">
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    );
};

export default layout;