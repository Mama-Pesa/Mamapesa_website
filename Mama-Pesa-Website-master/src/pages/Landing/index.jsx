import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Button, Img, List, Text } from 'components';
import { Steps } from 'antd';
import BenefitsCard from 'components/BenefitsCard'
import Features from 'components/Features'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import Step from 'components/Step'
import Testimonial from 'components/Testimonial'
import FAQ from 'components/FaqAccordion'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { handleSectionNavigation } from 'utils';
import { Link } from 'react-router-dom';

import stepImage1 from '../../../public/images/img_file.svg';
import stepImage2 from '../../../public/images/img_logos_gray_900_48x48.svg';
import stepImage3 from '../../../public/images/img_logos.svg';
import stepImage4 from '../../../public/images/img_logos_black_900_48x48.svg';

const totalSteps = 4;

const contentStyle = {
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const images = [
  'images/img002.webp',
  'images/img008.webp',
  'images/img003.webp',
];

const LandingPage = () => {
  
  
  return (
    <>
      <div className='flex flex-col font-lato auto w-auto sm:w-full md:w-full'>
      
        <Navbar className='bg-white-A700 flex sm:flex-row h-[72px] md:h-auto items-center justify-center px-16 md:px-5 sticky top-[0] w-full' />
        {heroSection()}
        <div
          className='mt-4em-mobile common-pointer bg-white-A700 flex md:flex-col flex-row gap-12 md:grid md:grid-cols-2  sm:grid-cols-1 items-center justify-start md:px-10 p-3 mb-4 sm:px-5 sm:py-14 w-full'
          id='block1'
          onClick={() => {
            handleSectionNavigation('block1')
          }}
        >

          <Features className='flex flex-1 flex-col gap-6 items-start justify-start w-full '/>
          
          <Features
            className='flex flex-1 flex-col gap-6 items-start justify-start w-full'
            icon='images/img_map.svg'
            title='Empower Your Future'
            description='At MamaPesa, we believe in the power of financial empowerment to shape a brighter future. With our app, you can access funding for income-generating ventures and take control of your financial independence.'
          />
          <Features
            className='flex flex-1 flex-col gap-6 items-start justify-start w-full'
            icon='images/img_logos_black_900.svg'
            title='Break Financial Barriers'
            description='Join the MamaPesa community and break through financial barriers. Our app offers a dedicated platform for women to secure funding and pave their own path to success. Say goodbye to limitations and hello to a world of opportunities.'
          />
          
        </div>
        <div className='bg-purple-300 flex flex-col md:flex-row font-roboto items-center justify-center sm:p-[] md:px-10 sm:px-5 sm:py-14 p-3 w-full' id='services'
>
          <div className='flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1312px] mx-auto md:pr-10 sm:pr-5 w-full'>
            <div className='flex flex-1 flex-col gap-6 sm:items-center items-start justify-start max-w-[644px] w-full'>
              <div className='flex flex-col gap-6 items-start justify-start w-full '>
                <Text
                  className='md:leading-[] max-w-[644px] md:max-w-full sm:text-2xl text-5xl md:text-[32px] text-black-900 tracking-[-0.96px] md:tracking-[1.5px]'
                  size='txtManropeExtraBold48'
                >
                  Unlock Financial Freedom with MamaPesa
                </Text>
                <Text
                  className='max-w-[644px] md:max-w-full text-black-900 text-lg'
                  size='txtLatoRegular18'
                >
                  <>
                    Discover a world of financial possibilities tailored for
                    women at MamaPesa. Our app is designed to empower you on
                    your journey to financial independence. From financing
                    income-generating assets to managing utility services and
                    accessing valuable financial tips, we&#39;re here to support
                    your goals. Take control of your finances today – download
                    MamaPesa and embark on a transformative financial journey.
                  </>
                </Text>
              </div>
              <div className='flex flex-col items-start justify-start pt-4 w-auto'>
                <Button
                  className='cursor-pointer min-w-[105px] sm:min-w-[] outline outline-[1px] outline-purple-800 rounded-[19px] text-base text-center sm:w-full'
                  color='purple_800'
                  size='sm'
                  variant='fill'
                >
                  Get App
                </Button>
              </div>
            </div>
            <Img
              className='md:flex-1 h-[594px] sm:h-auto object-cover sm:w-3/5 w-[354px] md:w-full '
              src='images/img_mockrocketcapture.png'
              alt='mockrocketcaptu'
            />
          </div>
        </div>



        {howItWorks()}
        <div className='bg-white-A700 flex flex-col font-lato md:gap-10 gap-20 items-center justify-center md:px-10 px-16 sm:px-5 py-28 w-full'>
          <div className='flex flex-col items-center justify-start max-w-3xl w-full'>
            <div className='flex flex-col gap-6 items-center justify-start w-full'>
              <Text
                className='sm:text-2xl text-5xl md:text-[32px] text-black-900 text-center md:tracking-[1.5px] w-full'
                size='txtManropeExtraBold48'
              >
                Unlock Your Potential Today
              </Text>
              <Text
                className='text-black-900 text-center text-lg w-full'
                size='txtRobotoRegular18'
              >
                Secure funding for income-generating ventures
              </Text>
            </div>
          </div>
          <div className='flex flex-col items-start justify-start max-w-[1312px] sm:max-w-[] mx-auto w-full'>
            <div className='flex-row gap-8 grid sm:grid-cols-1 grid-cols-2 items-start justify-start w-full'>
              <div className='bg-white-A700 flex flex-1 flex-col h-full items-start justify-start outline outline-[1px] outline-black-900 w-full'>
                <div className='flex flex-col h-[360px] md:h-auto items-center justify-end w-full'>
                  <Img
                    className='h-[360px] md:h-[] sm:h-auto object-cover w-[640px] md:w-[] sm:w-full'
                    src='images/img_placeholderimage_360x640.png'
                    alt='placeholderimag_One'
                  />
                </div>
                <div className='flex flex-col gap-8 md:gap-[] md:gap-x-8 h-full items-start justify-center p-12 md:p-[] md:pb-[] md:pl-[] md:pr-[] sm:px-5 w-full'>
                  <div className='flex flex-col items-start justify-start w-full'>
                    <div className='flex flex-col gap-6 items-start justify-start w-full'>
                      <Text
                        className='max-w-[544px] md:max-w-full md:text-2xl text-[40px] text-black-900 sm:text-xl'
                        size='txtManropeExtraBold40'
                      >
                        Maximize Your Savings Potential
                      </Text>
                      <Text
                        className='max-w-[544px] md:max-w-full text-base text-black-900'
                        size='txtLatoRegular16'
                      >
                        Take control of your finances with our savings accounts.
                        Earn competitive interest rates and watch your money
                        grow. Open an account today!
                      </Text>
                    </div>
                  </div>
                  <div className='flex flex-row gap-6 items-center justify-start w-full'>
                    <Button
                      className='cursor-pointer leading-[normal] min-w-[87px] text-base text-center'
                      shape='round'
                      color='purple_800'
                      size='xs'
                      variant='outline'
                    >
                      Open
                    </Button>
                    <div className='flex flex-row gap-2 items-center justify-center w-auto'>
                      <Text
                        className='text-base text-purple-800 w-auto'
                        size='txtLatoRegular16Purple800'
                      >
                        Learn
                      </Text>
                      <Img
                        className='h-6 w-6'
                        src='images/img_iconchevronright.svg'
                        alt='iconchevronrigh'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
<div class="elfsight-app-e2607589-75f3-49ed-9fd5-2a7be3533db4" data-elfsight-app-lazy></div>
              <List
                className='flex flex-1 flex-col gap-8 h-[768px] md:h-full items-start w-auto'
                orientation='vertical'
              >
              
                <BenefitsCard className='bg-white-A700 flex flex-row md:gap-5 h-[368px] md:h-[Auto%] sm:h-auto items-start justify-start sm:max-w-[] md:max-w-[] max-w-screen-sm my-0 outline outline-[1px] outline-black-900 w-full' />
                <BenefitsCard
                  className='bg-white-A700 flex flex-row md:gap-5 h-[368px] md:h-[Auto%] sm:h-auto items-start justify-start max-w-screen-sm my-0 outline outline-[1px] outline-black-900 w-full'
                  img='images/img_placeholderimage_1.png'
                  title='Empower Yourself Financially'
                  desc='Gain the skills and knowledge you need to make smart financial decisions. Enroll in our courses now!'
                />
              </List>
            </div>
          </div>
        </div>
        <div className='bg-white-A700 flex sm:flex-col flex-row font-lato md:gap-10 gap-20 items-center justify-center md:px-10 px-16  py-28 w-full sm:py-8 sm:px-0'>
          <Img
            className='flex-1 h-[640px] sm:h-[Auto%] md:h-auto max-h-[640px] object-cover md:rounded-lg md:w-1/2 sm:w-[90%]'
            src='images/img_placeholderimage_640x616.png'
            alt='placeholderimag_Two'
          />
          <div className='flex flex-1 flex-col gap-6 items-start justify-start md:w-1/2 sm:w-[90%] w-full'>
            <div className='flex flex-col items-start justify-start w-full'>
              <div className='flex flex-col gap-6 items-start justify-start w-full'>
                <Text
                  className='max-w-[616px] md:max-w-full sm:text-2xl text-5xl md:text-[44px] text-black-900 tracking-[-0.96px] sm:tracking-[1.5px]'
                  size='txtManropeExtraBold48'
                >
                  <>Empowering Women&#39;s Financial Independence</>
                </Text>
                <Text
                  className='max-w-[616px] md:max-w-full text-black-900 text-lg'
                  size='txtLatoRegular18'
                >
                  MamaPesa offers microloans to women, helping them finance
                  income-generating assets and achieve economic independence.
                </Text>
              </div>
            </div>
            <div className='flex flex-col items-center justify-start pt-4 w-auto'>
              <Button
                className='cursor-pointer leading-[normal] min-w-[128px] text-base text-center'
                shape='round'
                color='purple_800'
                size='xs'
                variant='outline'
              >
                Learn more
              </Button>
            </div>
          </div>
          
        </div>
        <Testimonial className='flex flex-col font-manrope gap-20 items-center justify-start md:px-10 px-16 sm:px-5 py-28 w-full' />
        <div className='flex sm:flex-col flex-row font-lato md:gap-10 gap-20 items-center justify-start md:px-10 px-16 sm:px-4 py-28 w-full'>
          <div className='flex flex-1 flex-col gap-6 items-start justify-start w-full'>
            <div className='flex flex-col items-start justify-start w-full'>
              <div className='flex flex-col gap-6 items-start justify-start w-full'>
                <Text
                  className='sm:text-2xl text-5xl md:text-[44px] text-black-900 tracking-[-0.96px] sm:tracking-[1.5px] w-full'
                  size='txtManropeExtraBold48'
                >
                  Unlock Your Potential
                </Text>
                <Text
                  className='max-w-[616px] md:max-w-full text-black-900 text-lg'
                  size='txtLatoRegular18'
                >
                  MamaPesa empowers women with financial independence by
                  providing funding for income-generating ventures.
                </Text>
              </div>
            </div>
            <div className='flex flex-col items-center justify-start pt-4 w-auto'>
              <Button
                className='cursor-pointer hidden leading-[normal] min-w-[129px] text-base text-center'
                shape='round'
                color='black_900'
                size='xs'
                variant='outline'
              >
                Learn More
              </Button>
            </div>
          </div>
          <Img
            className='flex-1 h-[640px] md:h-auto max-h-[640px] sm:max-h-[] object-cover md:rounded-lg md:w-1/2 sm:w-full'
            src='images/img_placeholderimage_2.png'
            alt='placeholderimag_Three'
          />
        </div>
        <Testimonial
          className='bg-white-A700 flex flex-col font-manrope gap-20 items-center justify-start md:px-10 px-16 sm:px-5 py-28 w-full'
          
          txt={
            <>
              As a student navigating the world of finance, EmpowerHer Finance
              has been my go-to guide. The app&#39;s financial tips section is
              like a treasure trove of knowledge, and the ability to finance
              income-generating assets sets it apart. It&#39;s not just an app;
              it&#39;s my financial mentor.
            </>
          }
          profileImage='images/img_avatarimage_56x56.png'
          name='Aisha K'
          title=' Student and Aspiring Investor'
        />
        <div className='bg-white-A700 flex sm:flex-col flex-row font-lato md:gap-10 gap-20 items-center justify-start md:px-10 px-16 sm:px-4 py-28 sm:py-8 w-full'>
          <Img
            className='flex-1 h-[640px] md:h-auto max-h-[640px] object-cover md:rounded-lg md:w-1/2 sm:w-full'
            src='images/img_placeholderimage_3.png'
            alt='placeholderimag_Four'
          />
          <div className='flex flex-1 flex-col gap-6 items-start justify-start md:w-1/2 sm:w-full w-full'>
            <div className='flex flex-col items-start justify-start w-full'>
              <div className='flex flex-col gap-6 items-start justify-start w-full'>
                <Text
                  className='max-w-[616px] md:max-w-full sm:text-2xl text-5xl md:text-[32px] text-black-900 tracking-[-0.96px] md:tracking-[1.5px]'
                  size='txtManropeExtraBold48'
                >
                  Unlock financial independence
                </Text>
                <Text
                  className='max-w-[616px] md:max-w-full text-black-900 text-lg'
                  size='txtLatoRegular18'
                >
                  Transform your future with MamaPesa - the app that helps you
                  secure funding for income-generating ventures.
                </Text>
              </div>
            </div>
            <div className='flex flex-col items-center justify-start pt-4 w-auto'>
              <Button
                className='cursor-pointer hidden leading-[normal] min-w-[128px] text-base text-center'
                shape='round'
                color='black_900'
                size='xs'
                variant='outline'
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
        <div className='bg-colors bg-white-A700 flex flex-col font-roboto items-center justify-start md:px-10 px-16 sm:px-5 py-28 w-full'>
          <div className='flex flex-col gap-6 items-center justify-start max-w-3xl w-full'>
            <div className='flex flex-col gap-6 items-center justify-start w-full'>
              <Text
                className='max-w-3xl md:max-w-full sm:text-2xl text-5xl md:text-[32px] text-black-900 text-center md:tracking-[1.5px]'
                size='txtManropeExtraBold48'
              >
                Join MamaPesa for free and start your journey to financial
                independence today!
              </Text>
              <Text
                className='leading-[150.00%] max-w-3xl md:max-w-full text-black-900 text-center text-lg'
                size='txtRobotoRegular18'
              >
                Feel the power of financial empowerment in the palm of your
                hand. Join us on this empowering journey – where every tap opens
                a door to financial freedom.
              </Text>
            </div>
            <Button
              className='cursor-pointer min-w-[217px] rounded-[20px] text-base text-center sm:w-full'
              color='purple_800'
              size='sm'
              variant='fill'
            >
              Download on Play Store
            </Button>
          </div>
        </div>
        

        {faqs()}
        <Footer className='flex font-manrope items-center justify-center sm:p-[] md:p-[] sm:pl-[] md:pl-[] sm:pr-[] md:pr-[] w-full' />
      </div>
    </>
  )

  function faqs () {
    const faqs = [
      
      {
        question: 'How does MamaPesa empower women financially?',
        answer:
          'MamaPesa facilitates financial empowerment for women by providing access to tailored financial services, including financing options for income-generating assets, utility management, and a wealth of educational content aimed at fostering financial literacy and independence.'
      },
      
      {
        question: 'Is my financial information secure with MamaPesa?',
        answer:
          'Absolutely. We prioritize the security and confidentiality of your financial information. Our app employs advanced encryption technologies and follows industry best practices to ensure the protection of your sensitive data.'
      },
      {
        question: 'How can I access the educational content in the app?',
        answer: "Navigating to the 'Financial Tips' section within the app grants you access to a wealth of educational content. From budgeting advice to investment strategies, our curated resources are designed to enhance your financial knowledge."
      },
      {
        question: 'What types of income-generating assets can be financed through the app?',
        answer: 'MamaPesa supports the financing of a diverse range of income-generating assets, such as small business ventures, education-related expenses, and career development initiatives.'
      },
    

    ]
    return (
      <div
        className='common-pointer bg-white-A700 flex md:flex-col flex-row font-manrope md:gap-10 gap-20 items-start md:items-center justify-center md:px-10 px-16 sm:px-5 py-28 sm:py-8 w-full'
        id='contact-us'
        onClick={() => {
          handleSectionNavigation('contact-us')
        }}
      >
        <div className='flex sm:flex-1 flex-col gap-6 sm:items-center items-start justify-start md:w-4/5 w-[32%] sm:w-full'>
          <Text
            className='max-w-[500px] md:max-w-full sm:text-2xl text-5xl md:text-[32px] text-black-900 tracking-[-0.96px] md:tracking-[1.5px]'
            size='txtManropeExtraBold48'
          >
            MamaPesa - Your Questions Answered
          </Text>
          <Text
            className='max-w-[500px] md:max-w-full text-black-900 text-lg'
            size='txtLatoRegular18'
          >
            <>
              Curious about MamaPesa? Explore our frequently asked questions to
              find answers to common queries. If you can&#39;t find what
              you&#39;re looking for, feel free to reach out to us directly.
            </>
          </Text>
          <Button
            className='cursor-pointer font-lato leading-[normal] min-w-[124px] text-base text-center sm:w-full'
            shape='round'
            color='purple_800'
            size='xs'
            variant='outline'
          >
            Contact us
          </Button>
        </div>

        <div className='w-[50%] md:w-full'>
          {faqs.map((faq, index) => (
            <FAQ key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    )
  }
}

export default LandingPage

function howItWorks () {
  return (
    <div>
    <div className='bg-white-A700 flex sm:flex-col flex-row font-manrope md:gap-10 gap-20 items-start justify-start md:px-10 px-16 sm:px-5 py-28 w-full'>
    
      <div className='flex flex-1 flex-col gap-8 items-start justify-start w-full'>
        <div className='flex flex-col items-start justify-start w-full'>
          <Text
            className='md:leading-[] max-w-[616px] md:max-w-full sm:text-2xl text-5xl md:text-[32px] text-black-900 tracking-[-0.96px] md:tracking-[1.5px]'
            size='txtManropeExtraBold48'
          >
            Unlock Your Financial Independence
          </Text>
        </div>
        
      </div>
      
      <div className='flex flex-1 flex-col items-start justify-start w-full'>
        <Steps direction="vertical" current={totalSteps - 1}>
          <Step title={<span style={{ fontWeight: 'bold' }}>Apply for Funding</span>} description="Enter your information to start your journey towards financial independence." icon={<img src={stepImage1} alt="Step 1" />} />
          <Step title={<span style={{ fontWeight: 'bold' }}>Receive Approval and Funding</span>} description="Once approved, receive funding for your income-generating venture within 48 hours." icon={<img src={stepImage2} alt="Step 2" />} />
          <Step title={<span style={{ fontWeight: 'bold' }}>Invest in Your Future</span>} description="Use your funding to invest in assets that will generate sustainable income for you." icon={<img src={stepImage3} alt="Step 3" />} />
          <Step title={<span style={{ fontWeight: 'bold' }}>Repay with Ease</span>} description="Repay your loan in flexible installments, tailored to your financial needs." icon={<img src={stepImage4} alt="Step 4" />} />
        </Steps>
      </div>

    </div>
    
    <div className='bg-purple-500 flex flex-col md:flex-row font-roboto items-center justify-center sm:p-8 md:px-10 px-10 sm:px-1 sm:py-5 py-20 w-full relative'>
  <div className='flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1312px] mx-auto md:pr-10 sm:pr-5 w-full p-5'>
    <div className='flex flex-1 flex-col gap-6 sm:items-center items-start justify-start max-w-[644px] w-full sm:p-5 p-20 my-0 shadow-lg rounded-lg bg-white'>
      <div className='flex flex-col gap-6 items-start justify-start w-full'>
        <h1 className='text-5xl md:text-6xl text-black-900 sm:text-[49px] font-bold leading-tight'>
          Empower your Food Production and Agriculture projects with MamaPesa
        </h1>
        <p className='text-lg text-black-900'>
        Our platform offers funding and tailored resources to maximize your farm's potential. We're dedicated to promoting financial independence within the farming community.
        </p>
        <button className='bg-yellow-500 text-white py-3 px-6 rounded-full hover:bg-yellow-600 transition duration-300 ease-in-out'>
          Get Started
        </button>
      </div>
    </div>
    <div className='md:flex-1 flex flex-col h-[594px] sm:h-auto sm:w-full w-[454px] md:w-full my-0'>
      <div className='mb-4 rounded-lg overflow-hidden shadow-xl'>
        <img src='images/img007.webp' alt='Agriculture' className='w-full h-full object-cover rounded-lg transform hover:scale-105 transition duration-300 ease-in-out' />
      </div>
      <div className='rounded-lg overflow-hidden shadow-xl'>
        <img src='images/img006.webp' alt='Solar Pumps' className='w-full h-full object-cover rounded-lg transform hover:scale-105 transition duration-300 ease-in-out' />
      </div>
    </div>
  </div>
</div>
</div>
  )
}


function heroSection () {
    
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
    
  return (
    <div id="hero-section" className='flex flex-col md:flex-row md:gap-10 sm:h-[45vh] items-center justify-between px-1 md:pl-10 md:px-10 px- sm:px-0 sm:py-0 py-2 sm:py-0 w-full relative'>
      
        <div className="corousel-home w-full sm:w-full h-full md:w-full lg:w-3/4 xl:w-3/4">
        <Carousel autoplay dotPosition="bottom" dots={true}>
          {images.map((imageUrl, index) => (
            <div key={index} style={{ ...contentStyle, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${imageUrl})` }}>
              <div className='text-center'>
                <Text
                  className='max-w-full sm:text-[28px] md:text-[40px] text-[56px] text-white-A700 tracking-[-1.12px] text-center pt-4'
                  size='txtManropeExtraBold56'
                >
                  Empower Your Financial Independence
                </Text>
                <Text 
                  className='max-w-[750px] md:text-base text-white-A700 text-lg p-3 text-center'
                  size='txtLatoRegular18' 
                >
                  Secure funding for your income-generating ventures and achieve
                  economic resilience and independence with MamaPesa&#39;s dedicated
                  platform. Say goodbye to financial barriers and hello to
                  empowerment.
                </Text>
                <div className='m-2 flex flex-row sm:flex-row gap-20 sm:items-center items-start sm:justify-center justify-center py-14'>
                  <Button
                    className='bg-purple-100 !rounded-[20px] cursor-pointer sm:w-full md:flex-1 font-lato leading-[normal] text-base outline-purple_900 px-8 sm:px-0 hover:bg-purple-400 transition duration-300 ease-in-out'
                    shape='round'
                    color='purple_800'
                    size='xs'
                    variant='outline'
                  >
                    Join Now
                  </Button>
                  <Link to="/learn-more">
      <button className="learn-more-button" style={{
        cursor: 'pointer',
        fontFamily: 'Lato',
        outline: '1px solid purple',
        borderRadius: '20px',
        padding: '12px 24px',
        textAlign: 'center',
        textDecoration: 'none',
        color: 'white',
        backgroundColor: 'purple',
        transition: 'background-color 0.3s ease-in-out',
        '&:hover': {
          backgroundColor: 'black'
        }
      }}>
        Learn More
      </button>
    </Link>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
  
};
