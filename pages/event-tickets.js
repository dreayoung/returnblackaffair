import { useState } from 'react';

import bottle from '../public/champagne.gif';
import title from '../public/title.png';
import date from '../public/date.png';
import Image from 'next/image';
import Link from 'next/link';

import pack from '../public/packages.png';

import { FaInstagram } from 'react-icons/fa';

function Eventtickets() {
  // const [play] = useSound(steppers);
  const [disable, setDisable] = useState(false);

  const [loading, setLoading] = useState(false);

  return (
    <div className="overflow-hidden pb-20">
      <Image
        priority
        src={bottle}
        width={600}
        height={600}
        alt="hello"
        className="h-96"
      />
      <Image
        src={title}
        width={800}
        height={800}
        alt="hello"
        className="absolute top-96 transform -translate-x-1/2 -translate-y-1/2 left-1/2"
      />
      <Image
        src={date}
        width={400}
        height={400}
        alt="hello"
        className="absolute top-20 right-4 w-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2"
      />
      <section className="mt-28 mx-8 lg:mt-40 lg:flex lg:flex-col">
        {/* <Link
          href="/event-tickets/flashsale"
          onClick={() => setLoading(true)}
          className=""
        > */}
          <div className="mt-4 mb-8 mx-4 uppercase border-transparent rounded-md bg-gray-300 text-black p-4 text-md text-center">
            SALES HAVE ENDED. SEE YOU AT 9PM <br/> TICKET HOLDERS CHECK YOUR EMAILS
          </div>
        {/* </Link> */}
        <div className="py-4 flex justify-center items-center space-x-2"></div>
        <div className="rounded-md">
          <Image
            priority
            src={pack}
            width="auto"
            height="auto"
            alt="hello"
            className="w-96 lg:ml-96 md:ml-72"
          />
          <Link
            href="https://www.instagram.com/unavailable_juju/"
            target="_blank"
          >
            <p className="pt-4 text-center">
              For Bottle Packages Contact @unavailable_juju{' '}
            </p>
            <div className="flex justify-center">
              <FaInstagram />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Eventtickets;
