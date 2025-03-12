'use client'

import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const CancellationRefundPolicy: React.FC = () => {
  // Use a constant for the last updated date to make future updates easier
  const LAST_UPDATED_DATE = "12-03-2025";
  
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-gray-800 mb-4 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-600">Cancellation & Refund Policy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Last updated on {LAST_UPDATED_DATE}
          </p>
        </div>

        <div className="prose mx-auto text-lg text-gray-700 space-y-6">
          <p>
            NXTSYNC PVT.LTD believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:
          </p>
          
          <ul className="list-disc pl-6">
            <li>Cancellations will be considered only if the request is made immediately after placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.</li>
            <li>NXTSYNC PVT.LTD does not accept cancellation requests for perishable items like flowers, eatables, etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.</li>
            <li>In case of receipt of damaged or defective items, please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within only same-day days of receipt of the products. In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within only same-day days of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.</li>
            <li>In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them. In case of any Refunds approved by the NXTSYNC PVT.LTD, it'll take 9-15 Days for the refund to be processed to the end customer.</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CancellationRefundPolicy;
