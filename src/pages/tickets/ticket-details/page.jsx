import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { tickets } from "../../../core/settings/constants";
import NotFound from "../../../components/templates/tickets/not-found";
import Sender from "../../../components/templates/tickets/ticket-details/sender";
import Messages from "../../../components/templates/tickets/ticket-details/messages";
import SendMessage from "../../../components/templates/tickets/ticket-details/send-message";

export default function TicketDetailsPage() {
  const { ticketID } = useParams();
  const [ticketDetails, setTicketDetails] = useState(null);

  // In real projects this will be a Async function
  const getTicketDetails = () =>
    tickets.find((ticket) => ticket.id == ticketID);

  useEffect(() => {
    const ticket = getTicketDetails();
    setTicketDetails(ticket);
  }, [ticketID]);

  if (!ticketDetails) return <NotFound />;

  return (
    <div className="w-[70%] mx-auto space-y-6">
      <Sender title={ticketDetails.title} userName={ticketDetails.fullName} />
      <Messages messages={ticketDetails.messages} />
      <SendMessage />
    </div>
  );
}
