import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import './App.css'

export default function App() {
  return (
    <div>
      <Navbar />
      <Content />
      <BottomNav />
    </div>
  )
}

function Navbar() {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleNavbarClick = () => {
    setIsContentVisible(true);
  };

  const handleExitClick = () => {
    setIsContentVisible(false);
  };
  return (
    <div className="navbar">
      <img className="navbar-content" src=" https://www.floraison.in/wp-content/uploads/2020/09/floraison-logo.svg" />

      <div className="navbar-btn">

        <Button color="inherit" onClick={handleNavbarClick} endIcon={<MenuIcon />}>

          Menu
        </Button>
        <div className="menu-content-div">
          <div className="menu-content">
            //conditional rendering
            {isContentVisible && (
              <section className="menu-content-sec">
                <Button color="error" onClick={handleExitClick}>X</Button>
                <a href="#">Home</a>
                <a href="#">Our Company</a>
                <a href="#">Our Leadership</a>
                <a href="#">Our Execution</a>
                <a href="#">Local Expertise</a>
                <a href="#">Work With Us</a>
                <a href="#">Research Center</a>
                <a href="#">Contact Us</a>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}



function Content() {
  return (
    <div>
      <div className="parent">
        <div className="image-container">
          <img className="image" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSNEcc_nZDUTEm00IFalf8_cXBoATeArtMCQ0dWzRleaLISxrNC" />
        </div>
        <div className="btns">
          <a href="#" className="btn-content">India Entry Stratergy</a>
          <a href="#" className="btn-content">India Subsidary</a>
          <a href="#" className="btn-content">Subsidiary Support</a>
          <a href="#" className="btn-content">India PEO Services</a>
          <a href="#" className="btn-content">Small Business Support</a>
        </div>
      </div>
      <div className="gateway">
        <h2 >Your Gateway to India</h2>
        <p>Expand your global business and enter the Indian markets NOW!</p>
      </div>
      <div className="container">
        <div className="container-content" >
          <h2>If you aren’t doing business in India, it’s time to re-think!</h2>
          <p>Enter the Indian markets NOW. India’s journey on the path of
            economic reforms has transformed it to one of the world’s fastest
            growing economies. Its large, young & growing population is its best asset.
            Sectors like IT and ITES, Retail, Ecommerce, Manufacturing, Pharma and Healthcare,
            R&D and so many other sectors are projected to provide serious growth opportunities
            to global and Indian companies who are doing business in India.</p>
        </div>
        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTW3rrrNVIwWUARyuONPi-REJDcd9CXjOwdYFDtoJVl05_inyOw" />
      </div>
      <div className="container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ80SLq2ovu6uBy3OL_sEXs9D_By9q-3GlCxuZvIety5m6S--jE" />
        <div className="container-content">
          <h2>Your journey into India starts by choosing the right partner</h2>
          <p>Your journey into India, of course, starts with engaging and supported by the right partner – who has the capability and resolve to guide you throughout. The choice of a strategic consulting firm offering holistic professional services, can make a huge difference to the business of a global organization. Increasingly, more than ever before, global organizations need to carefully engage local firms that have expertise of handling global companies
            and managing their growth, with a proactive consulting approach, which would mitigate all possible risks.</p>
        </div>
      </div>
      <div className="service-content">
        <h2 >Explore our Service Suite</h2>
        <p>Share your plans with us and help us customise a workable strategy for your effective entry into India.</p>
        <p>Go beyond your current needs and experience our holistic range of services tailored for you</p>
      </div>
      <CardsContent />
      <div className="container">
        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRgDrdscUqxFrq2UrnnszcYEvtpuwUO-HSxJ1gwB7lAwK4z7mir" />
        <div className="container-content">
          <h2>Finding perfect growth story for our global and domestic clients</h2>
          <p>Floraison is a strategic and business consulting company founded in 2002 and is based out of Bangalore, India. Since our inception, we have helped more than 300 global companies to create successful businesses in India under our
            India Entry Strategies and have nurtured the aspirations of more than 200 domestic entrepreneurs with our Small Business Support.</p>
          <a href="#"><KeyboardDoubleArrowRightIcon fontSize="small" /> Know more about us</a>
        </div>

      </div>
      <div className="container">
        <div className="container-content" >
          <h2>Benefit from our visionary leadership and astute planning</h2>
          <p>We share a common vision to constantly influence, lead & simplify the way our global & domestic clients  setup and do their business in India. For us, every client engagement is unique and needs careful & smart planning.
            We lead every engagement with a sense of purpose, responsibility and ownership, to help you achieve your objectives and goals..</p>
          <a href="#"><KeyboardDoubleArrowRightIcon fontSize="small" /> Meet our leadership team</a>
        </div>
        <img src="https://www.onmanorama.com/content/dam/mm/en/news/columns/civil-services-tips-training/images/2019/6/11/civil-service.jpg.transform/845x440/image.jpg" />
      </div>
      <div className="container">
        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSGdWC-X1rvbDT1sQwyp-vL60OEGQVyta1_Pf6t_K28fgIzXLvB" />
        <div className="container-content">
          <h2>Each engagement is managed by single point of contact</h2>
          <p>We have dedicated in-house experts in each of our service offering and they all work together in focussed groups.
            We always start by analysing a client engagement from several points of view. This multidisciplinary approach is a major benefit for our clients as they get the best of expertise & experience.
            A customised team is created for large or complex engagement and this team is led by a single point of contact.</p>
          <a href="#"><KeyboardDoubleArrowRightIcon fontSize="small" /> See how we do this</a>
        </div>

      </div>
      <div className="container">
        <div className="container-content" >
          <h2>Our unmatched experience and local expertise will guide you throughout</h2>
          <p>India is a diverse country and to many it represents a sub-continent – many nations rolled into one! Our several man years of combined
            local experience and expertise will help you navigate through various complex situations and put you
            on the definite path of success in the Indian market.</p>
          <a href="#"><KeyboardDoubleArrowRightIcon fontSize="small" /> Learn how this benefits you</a>
        </div>
        <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcShT1w1-pjwwlpbtBMQURrr-kNcM3VsK-fjyqLdCSh-_ZN4Dp1P" />
      </div>
      <Book />
      <div className="grass-bg">
        <div className="grass-bg-content">
          <h2>Ready to get started?</h2>
          <h4>start@floraison.in</h4>
          <Button color="inherit" variant="contained" className="grass-bg-btn">Contact us</Button>
        </div>

      </div>

    </div>
  )
}

function CardsContent() {
  const cardDetail = [
    {
      'img': "https://www.floraison.in/wp-content/uploads/2020/07/home-ss-1-768x378.webp",
      "heading": "India Entry Strategies",
      "content": "It's our mission to promote and formulate the entry of global organisations into the indian markets through well through out & structured strategies which includes India Subsidiary & India PEO options"
    },
    {
      'img': "https://www.floraison.in/wp-content/uploads/2020/07/home-ss-2-768x512.webp",
      "heading": "India Subsidiary",
      "content": "Setting up & operting your own India subsidiary is a great way to access India on permanent long-term basis. India subsidiary has been considered by several global companies operating in India"
    },
    {
      'img': "https://www.floraison.in/wp-content/uploads/2020/07/home-ss-3-768x642.webp",
      "heading": "Subsidiary Support",
      "content": "While you handle your core business, our professionals from bookkeeping, taax, comlianec, payroll, HR & business support teams will deliver ongoing support services, each month under a professional engagement"
    },
    {
      'img': "https://www.floraison.in/wp-content/uploads/2020/07/home-ss-4-768x512.webp",
      "heading": "India PEO Services",
      "content": "Simplify your global expansion plan and comence hiring your taalent in Indiaa without the need to form your legal entity. Engage our PEO services & get access to employees who you've always wanted to work with"
    },
    {
      'img': "https://www.floraison.in/wp-content/uploads/2020/07/home-ss-5-768x512.webp",
      "heading": "Small Business Support",
      "content": "We aspire to cultivate the spirit of entrepreneurship among potential domestic entrepreneurs & to help them start their dream venture & support them to stabilize & grow their business and achieve success"
    }
  ]
  return (
    <div className="cardDetails">
      {cardDetail.map((crd, index) => <Cards cardDetail={crd} key={index} />)}
    </div>
  )
}

function Cards({ cardDetail }) {

  return (
    <Card sx={{ maxWidth: 340 }}>
      <CardMedia
        sx={{ height: 160 }}
        image={cardDetail.img}
      />
      <div className="card-content">
        <CardContent sx={{ height: 160 }}>
          <Typography gutterBottom variant="h5" component="div">
            {cardDetail.heading}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cardDetail.content}
          </Typography>
        </CardContent>
      </div>

    </Card>
  )
}

const Book = () => {
  const books = [
    { image: 'https://www.floraison.in/wp-content/uploads/2020/09/floraison-logo.svg', title: 'SMALL BUSINESS', subtitle: 'Support' },
    { image: 'https://www.floraison.in/wp-content/uploads/2020/09/floraison-logo.svg', title: 'INDIA ENTRY', subtitle: 'Stratergies' },
    { image: 'https://www.floraison.in/wp-content/uploads/2020/09/floraison-logo.svg', title: 'INDIA ENTRY', subtitle: 'Stratergies' },
    { image: 'https://www.floraison.in/wp-content/uploads/2020/09/floraison-logo.svg', title: 'SMALL BUSINESS', subtitle: 'Support' },
    { image: 'https://www.floraison.in/wp-content/uploads/2020/09/floraison-logo.svg', title: 'INDIA ENTRY', subtitle: 'Stratergies' },
    { image: 'https://www.floraison.in/wp-content/uploads/2020/09/floraison-logo.svg', title: 'INDIA ENTRY', subtitle: 'Stratergies' },
    { image: 'https://www.floraison.in/wp-content/uploads/2020/09/floraison-logo.svg', title: 'INDIA ENTRY', subtitle: 'Stratergies' },
  ];

  return (
    <div className="bookflex">
      <h1>Download our ePublications</h1>
      <BookScroll books={books} scrollDuration={3000} />
    </div>
  );
};
const BookScroll = ({ books, scrollDuration }) => {
  const [currentBookIndex, setCurrentBookIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Increment the book index to scroll to the next book
      setCurrentBookIndex((prevIndex) =>
        prevIndex === books.length - 3 ? 0 : prevIndex + 1
      );
    }, scrollDuration);

    return () => clearTimeout(timeout);
  }, [currentBookIndex, books.length, scrollDuration]);

  return (
    <div className="book-scroll">
      <div
        className="book-container"
        style={{
          transform: `translateX(-${currentBookIndex * 100}%)`,
          transitionDuration: `${scrollDuration}ms`,
        }}
      >
        {books.map((book, index) => (
          <Card className="book" key={index}>
            <img className="book-img" src={book.image} alt={book.title} />
            <div className="book-content">
              <p className="book-title">{book.title}</p>
              <p className="book-subtitle">{book.subtitle}</p>
            </div>
            <div className="book-div">
              <div className="book-div-color">

              </div>
              <div className="book-div-img">
                <div className="book-div-imgflex">
                  <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQWO_uslGeDI3z0sKqIzNmIV553Had75ANTCg4VfFAiwSIXrvOm" />
                  <img src="https://www.onmanorama.com/content/dam/mm/en/news/columns/civil-services-tips-training/images/2019/6/11/civil-service.jpg.transform/845x440/image.jpg" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3bEl1gbyDn0jRywa-Kndr_PXkhSBAAmjFNHGaPUdYTFT-MpS" />
                </div>
                <div className="book-div-imgflex">
                  <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQWO_uslGeDI3z0sKqIzNmIV553Had75ANTCg4VfFAiwSIXrvOm" />
                  <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTW3rrrNVIwWUARyuONPi-REJDcd9CXjOwdYFDtoJVl05_inyOw" />
                  <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcShT1w1-pjwwlpbtBMQURrr-kNcM3VsK-fjyqLdCSh-_ZN4Dp1P" />

                </div>
              </div>
            </div>
            <img className="world-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS81k-hvmgd9KxpyIVrTUlvKBWv2nvJH9oasZ6xuKv1eMgN421y" />
          </Card>
        ))}
      </div>
    </div>
  );
};

function BottomNav() {
  return (
    <div className="bottom">
      <div className="bottomNav">
        <div className="bottomNav-content">
          <h3>Contact Us</h3>
          <p>Floraison India Strategic Consulting Pvt Ltd
            185/7, 2nd Floor, Chandra Plaza
            8th F Main Road, 26th Cross
            Chandra Plaza, Jayanagar 3rd Block
            Bangalore – 560011, Karnataka, India
            Phone: 91-80-26538257
            Email: start@floraison.in</p>

        </div>
        <div className="bottomNav-content">
          <h3>Our Services</h3>
          <a href="#">India Entry Strategies</a>
          <a href="#">India Subsidiary</a>
          <a href="#">Subsidiary Support</a>
          <a href="#">India PEO Services</a>
          <a href="#">Small Business Support</a>
        </div>
        <div className="bottomNav-content">
          <h3>About Us</h3>
          <a href="#">Our Company</a>
          <a href="#">Our Leadership</a>
          <a href="#">Our Execution</a>
          <a href="#">Local Expertise</a>
          <a href="#">Work With Us</a>
        </div>
        <div className="bottomNav-content">
          <h3>Others</h3>
          <a href="#">Resource Centre</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Disclaimer</a>
        </div>
      </div>
      <p className="copyright">Copyright (c) 2023 Floraison India Strategic Consulting Pvt Ltd, Bangalore, India. All Rights Reserved.</p>
    </div>
  )
}