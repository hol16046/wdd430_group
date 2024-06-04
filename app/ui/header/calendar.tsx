import Link from 'next/link';

// Sample event data
const eventData = {
  "events": [
    {
      "title": "Summer Festival",
      "date": "June 10th",
      "location": "City Park",
      "description": "Join us for a day of music, food, and fun activities for the whole family."
    },
    {
      "title": "Local Farmers' Market",
      "date": "June 15th",
      "location": "Main Street",
      "description": "Shop for fresh produce, baked goods, and handmade crafts from local vendors."
    },
    {
      "title": "Community Movie Night",
      "date": "June 20th",
      "location": "Town Square",
      "description": "Bring your blankets and chairs and enjoy an outdoor movie under the stars."
    },
    {
      "title": "Summer Concert Series",
      "date": "June 25th",
      "location": "Amphitheater",
      "description": "Listen to live music performances by local bands every Saturday night throughout the summer."
    }
  ]
};

export default function Calendar() {
  return (
    <div className="rounded-lg border-rust border-2 p-1 text-center">
      <h1 className="font-bold text-md">Community Calendar</h1>
      <h2 className="font-bold text-sm">June 2024</h2>
      <ul>
        {eventData.events.map((event, index) => (
          <li key={index} className="list-none mb-4">
            {/* <Link legacyBehavior href={`/events/${index}`}>            */}
              <p className="text-blue-700 hover:underline text-sm mt-1">{event.title} - {event.date} </p>
           {/* </Link> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
