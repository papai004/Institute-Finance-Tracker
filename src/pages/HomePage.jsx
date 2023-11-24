import { Row, Col } from "antd";
import Home1 from "../assets/images/home1.svg";
import Home2 from "../assets/images/home2.svg";
import Navbar from "../components/landing/Navbar";
import Feature from "../components/landing/Features";
import Footer from "../components/landing/Footer";
import Testimonials from "../components/landing/Testimonials";
import Work from "../components/landing/Works";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Row style={{ backgroundColor: "#f5ffe3" }}>
        <Col span={8} style={{ backgroundImage: `url(${Home1})`, height: "70vh"}} />
        <Col span={8} style={{margin: "auto"}}></Col>
        <Col span={8} style={{ backgroundImage: `url(${Home2})`, height: "70vh"}} />
      </Row>
      <Feature />
      <Work />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Landing;
