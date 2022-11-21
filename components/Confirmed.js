import Link from 'next/link';
import React, { useState } from 'react';
import { BsCheck2Circle } from 'react-icons/bs';
import TicketTemplate from './TicketTemplate';

function Confirmed({ name, email, quantity, approved }) {
  const { payment } = approved;
  const index = Number(quantity) - 1;

  const [hide, setHide] = useState(false);

  const [ticketInfo, setTicketInfo] = useState([]);
  const [ticketInfoNew, setTicketInfoNew] = useState(null);

  const numOfTix = [
    { tix: ['Your Ticket'], qt: '1' },
    { tix: ['Ticket 1', 'Ticket 2'], qt: '2' },
    { tix: ['Ticket 1', 'Ticket 2', 'Ticket 3'], qt: '3' },
    { tix: ['Ticket 1', 'Ticket 2', 'Ticket 3', 'Ticket 4'], qt: '4' },
  ];

  async function getTickets() {
    setHide(true);
    return numOfTix[index].tix?.map(async () => {
      const response = await fetch(
        'https://apis.ticket-generator.com/client/v1/ticket/data/?eventId=637a3be36d72432799b07da4&width=300',
        {
          headers: {
            Accept: 'application/json',
            'X-Api-Key': '2c68e8708fb32bf8a14211aaaf947dc1acbd7b1e197a6b7e',
          },
          method: 'POST',
        }
      );
      ticketInfo.push(await response.json());
      setTicketInfoNew(ticketInfo);
    });
  }

  return (
    <>
      <div className="text-green-400 text-center px-6">
        <div className="flex justify-center items-center">
          <BsCheck2Circle className="text-6xl" />
        </div>
        <span className="text-lg">
          Approved! Do not refresh the page. redeem all your tickets below!
        </span>
        <Link href={payment?.receiptUrl} target="_blank">
          <p className="text-white underline py-2 rounded-md"> Your receipt</p>
        </Link>
      </div>
      <div className="mt-4 grid grid-cols-1 space-y-6">
        <button
          className={`${
            hide ? 'bg-orange-900 animate-pulse' : 'bg-orange-700'
          } p-4 text-white mx-6 rounded-md my-6`}
          disabled={hide}
          onClick={getTickets}
        >
          {hide ? 'Loading...' : 'Reedem Tickets'}
        </button>

        {ticketInfoNew?.map((info, x) => {
          console.log('idx', x);
          return (
            <div key={info.ticketId}>
              <TicketTemplate
                info={info}
                otherKey={name + x}
                name={name}
                indx={x + 1}
                quantity={quantity}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Confirmed;
