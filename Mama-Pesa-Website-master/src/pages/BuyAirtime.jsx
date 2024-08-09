import React, { useEffect, useState } from 'react';
import { Button, Img, List, Text } from 'components'
import { Form, Input,Select} from 'antd';
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import { baseUrl } from '../repositories/Repository';

const BuyAirtime = () => {
  const [successView, setSuccesView] = useState(null);
  const [errorView, setErrorView] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [airtimePurchased, setAirtimePurchased] = useState(false);

  const onFinish = async (values) => {
    setSubmitting(true);
    try {
      const formData = new FormData();
      
      for (let key in values) {
        if (values.hasOwnProperty(key)) {
          formData.append(key, values[key]);
        }
      }
  
      const response = await fetch(`${baseUrl}/buy_airtime`, {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        setSubmitting(false);
        // throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log('Data : '+JSON.stringify(data));
      if(data.success){
        setSuccesView(
            <div className='success-notice'>
                <h4 className='mb-2'>✅ Success!</h4>
                <hr />
                <p>
                  Your transaction has been sent successfully. Please Enter Mpesa PIN to complete the transaction.
                </p>
            </div>
        );
        setErrorView(null);
        setAirtimePurchased(true);
        scrollToElement('note');
      }else{
        setSuccesView(null);
        if (data.errors) {
          const errorMessages = Object.values(data.errors).flat(); // Extract error messages
          const errorList = errorMessages.map((error, index) => (
            <div key={index}>
              {error}
            </div>
          ));
          setErrorView(
            <div className='error-notice'>
              <h4 className='mb-2'>☹️ Error!</h4>
              <hr />
              <p className='mt-2'>{errorList}</p>
            </div>);
        }else{
          setErrorView(
          <div className='error-notice'>
            <h4 className='mb-2'>☹️ Error!</h4>
            <hr/>
            <p className='mt-2'>Something Went wrong!</p>
          </div>);
        }
        scrollToElement('note');
      }
      setSubmitting(false);
    } catch (error) {
        setSuccesView(null);
        setErrorView(
          <div className='error-notice'>
            <h4 className='mb-2'>☹️ Error!</h4>
            <hr />
            <p>Something Went wrong!</p>
          </div>);
        scrollToElement('note');
        setSubmitting(false);
    }
  }

  const scrollToElement = (id) => {
      const element = document.getElementById(id);
      
      if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
      }
  };

  return (
    <div className='flex flex-col font-lato auto w-auto sm:w-full md:w-full'>
        <div id='note'></div>
        <Navbar className='bg-white-A700 flex sm:flex-row h-[72px] md:h-auto items-center justify-center px-16 md:px-5 sticky top-[0] w-full' />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 content">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6 md:col-span-12 md:w-full flex flex-col items-center justify-center py-8">
                <h1 className="airtime-heding text-center">Buy Airtime</h1>
                <p className="text-center text-lg font-medium mt-3">Top up your phone or send Airtel or Safaricom airtime to friends and family using M-Pesa!</p>
                <Img
                  className="airtime-img hide-mobi"
                  src='images/airtime.png'
                  alt='mockrocketcaptu'
                />
              </div>
              <div className="col-span-6 md:col-span-12 md:w-full  py-8 mb-4 border-l p-4">
              <h2 className="text-xl font-semibold mb-4 hide-mobi">Fill this form to get started</h2>
              {errorView}
              {successView}
              <Form
                  name="buyAirtimeForm"
                  onFinish={onFinish}
                  initialValues={{ network: '' }}
                  labelCol={{ span: 24 }} // Set the label to take up full width
                  wrapperCol={{ span: 24 }} // Set the wrapper to take up full width
                >
                  <Form.Item
                    label="Amount of airtime you want to buy"
                    name="amount"
                    rules={[
                      { 
                          required: true, 
                          message: 'Please enter the amount!' 
                      },
                      {
                          validator: (_, value) => {
                              if (value && parseFloat(value) < 5) {
                                  return Promise.reject('The amount must be at least 5.');
                              }
                              return Promise.resolve();
                          }
                      }
                  ]}
                  >
                    <Input
                      placeholder="Amount"
                      className="shadow-sm border rounded w-full px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </Form.Item>
                  <Form.Item
                    label="Phone number to pay"
                    name="phone"
                    rules={[
                      { required: true, message: 'Please enter the phone number to pay!' },
                    ]}
                  >
                    <Input
                      placeholder="07xx-xxx-xXX"
                      className="shadow-sm border rounded w-full px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </Form.Item>

                  <Form.Item
                    label="Phone number to be topped up"
                    name="phone_to_pop_up"
                    rules={[
                      {
                        required: true,
                        message: 'Please enter the phone number to be topped up!',
                      },
                    ]}
                  >
                    <Input
                      placeholder="07xx-xxx-xxX"
                      className="shadow-sm border rounded w-full px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </Form.Item>

                  <Form.Item
                    label="Recipient Network"
                    name="network"
                    rules={[
                      { required: true, message: 'Please select the recipient network!' },
                    ]}
                  >
                    <Select
                      placeholder="--SELECT--"
                      className="border rounded w-full px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <Select.Option value="SAFARICOM">SAFARICOM</Select.Option>
                      <Select.Option value="AIRTEL">AIRTEL</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item>
                    <Button
                      disabled={submitting}
                      type="primary"
                      htmlType="submit"
                      className="cursor-pointer min-w-[105px] outline outline-[1px] outline-purple-800 rounded-[19px] text-base text-center w-full"
                      color='purple_800'
                      size='sm'
                      variant='fill'
                    >
                      {submitting ? 'Submitting...' : 'Continue'}
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        <Footer className='flex font-manrope items-center justify-center sm:p-[] md:p-[] sm:pl-[] md:pl-[] sm:pr-[] md:pr-[] w-full' />
    </div>
  );
};
export default BuyAirtime;
