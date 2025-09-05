const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

const events = [
  {
    id: "techfest-2025",
    title: "TechFest 2025",
    image: "images/tech-fest.png",
    date: "15th September 2025",
    venue: "Expo Center, Lahore",
    description: "Annual technology festival featuring startups, AI talks, and networking.",
    fullDescription: "TechFest 2025 is Pakistan’s largest technology conference bringing together innovators, startups, developers, and industry leaders under one roof. This year’s theme focuses on AI, Robotics, Web3, and Cloud Computing with hands-on workshops, startup pitching competitions, and keynote sessions from global tech experts. Expect panel discussions, live demos of cutting-edge tech, and networking opportunities with investors and entrepreneurs. Whether you're a student, a tech professional, or a startup founder TechFest 2025 is your gateway to the future of technology.",
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.1278623433973!2d74.25804018974303!3d31.465668703005885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919022a17a84c4b%3A0x74ef403a4d0bb9a4!2sExpo%20Centre%20Lahore!5e0!3m2!1sen!2s!4v1757083485670!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"></iframe>`
  },
  {
    id: "music-vibes-night",
    title: "Music Vibes Night",
    image: "images/music-night.png",
    date: "25th September 2025",
    venue: "Alhamra Arts Council, Lahore",
    description: "A live concert night with global artists and DJs.",
    fullDescription: "Experience an unforgettable night of music and rhythm at Music Vibes Night 2025. Featuring live performances from Pakistan’s top indie and mainstream artists, this event promises soulful melodies, electrifying beats, and a celebration of diverse music genres from classical to pop and fusion. Gather your friends and family, enjoy the open-air ambiance of Alhamra, and dance the night away under the stars. Perfect for music lovers and partygoers alike.",
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.7583798066416!2d74.32910199999999!3d31.558244999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904b47ea0f73d%3A0x59baa4e1f542274!2sAlhamra%20Art%20Center!5e0!3m2!1sen!2s!4v1757084164752!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  },
  {
    id: "startup-meetup",
    title: "Startup Meetup 2025",
    image: "images/startup-meetup.png",
    date: "1st October 2025",
    venue: "NIC Lahore (National Incubation Center)",
    description: "Meet investors, pitch your startup, and network with entrepreneurs.",
    fullDescription: "Calling all entrepreneurs, investors, and aspiring founders! Startup Meetup 2025 is your chance to connect with mentors, pitch your business ideas, and explore funding opportunities.If you're serious about entrepreneurship, this event is a must-attend to grow your network and gain insights into building a successful startup.The event will feature:1. Founder fireside chats with successful startup CEOs 2. Pitch competitions with cash prizes and investor exposure 3. Networking sessions with accelerators and VCs.",
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.560380859755!2d74.3500107!3d31.508765500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391908af532d7619%3A0xe26730359966c739!2sNational%20Incubation%20Center%20Lahore!5e0!3m2!1sen!2s!4v1757084338713!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  },
  {
    id: "food-carnival",
    title: "Global Food Carnival",
    image: "images/food-carnival.png",
    date: "10th October 2025",
    venue: "Jilani Park (Racecourse), Lahore",
    description: "Over 50 stalls featuring street food, gourmet delicacies, and desserts.",
    fullDescription: "The Global Food Carnival is a food lover's paradise! Explore stalls serving international cuisines from more than 20 countries from Thai curries to Turkish kebabs, French desserts to Pakistani street food. Perfect for families, couples, and friend. Come hungry, leave happy!. The event will also have:1. Cooking competitions with celebrity chefs 2. Live music and cultural performances 3. Kids’ fun area and activitie",
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.25989294548!2d74.33454789999999!3d31.5444814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904ea9de1464b%3A0x78b4a9219b7bb24f!2sJilani%20Park%20(Race%20Course)%2C%20Lahore!5e0!3m2!1sen!2s!4v1757084885451!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  },
  {
    id: "art-exhibition",
    title: "Modern Art Exhibition",
    image: "images/art-exhibition.png",
    date: "18th October 2025",
    venue: "Alhamra Art Gallery, Lahore",
    description: "A showcase of modern and contemporary art pieces.",
    fullDescription: "Immerse yourself in creativity at the Modern Art Exhibition 2025. Featuring over 50 artists from across Pakistan, the exhibition showcases paintings, sculptures, digital art, and installations exploring themes of identity, technology, and the future. Interactive workshops and guided tours will also be available, making this event great for students, artists, and anyone interested in contemporary art.",
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.7583798066416!2d74.32910199999999!3d31.558244999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904b47ea0f73d%3A0x59baa4e1f542274!2sAlhamra%20Art%20Center!5e0!3m2!1sen!2s!4v1757085001425!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  },
  {
    id: "ai-hackathon",
    title: "AI Hackathon 2025",
    image: "images/ai-hackathon.png",
    date: "25th October 2025",
    venue: "Online Event — Hosted by MIT Media Lab",
    description: "48-hour coding challenge focused on AI solutions.",
    fullDescription: "AI Hackathon 2025 is a 48-hour virtual hackathon that invites developers, data scientists, and AI enthusiasts to solve real-world challenges using Artificial Intelligence. Participants will form teams, build AI-powered solutions, and present to an expert panel of judges from MIT Media Lab. Winning teams will get mentorship, funding opportunities, and global recognition. This is a perfect event for tech students, coders, and researchers to showcase their skills to an international audience.",
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?..."></iframe>`
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const eventId = params.get("id");
  const event = events.find(e => e.id === eventId);

  if (event) {
    document.getElementById("event-title").textContent = event.title;
    document.getElementById("event-image").src = event.image;
    document.getElementById("event-date").textContent = event.date;
    document.getElementById("event-venue").textContent = event.venue;
    document.getElementById("event-description").textContent = event.fullDescription;
    document.getElementById("event-map").innerHTML = event.mapEmbed;
  }
});

  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");
  const clearSearch = document.getElementById("clear-search");
  const eventCards = document.querySelectorAll(".event-card");

  function filterEvents() {
    const query = searchInput.value.toLowerCase();

    eventCards.forEach(card => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(query) ? "block" : "none";
    });
  }

  searchForm.addEventListener("submit", e => {
    e.preventDefault();
    filterEvents();
  });

  clearSearch.addEventListener("click", () => {
    searchInput.value = "";
    eventCards.forEach(card => (card.style.display = "block"));
  });

  searchInput.addEventListener("input", filterEvents);
